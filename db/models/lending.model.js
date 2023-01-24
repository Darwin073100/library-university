const { Model, DataTypes, Sequelize } = require('sequelize');

const { BOOK_TABLE } = require('./book.model');
const { STUDENT_TABLE } = require('./student.model');

const LENDING_TABLE = 'lending';

const LendingSchema = {
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  bookId:{
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'book_id',
    references:{
      model: BOOK_TABLE,
      key: 'id'
    },
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE'
  },
  studentId:{
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'student_id',
    references:{
      model: STUDENT_TABLE,
      key: 'id'
    },
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE'
  },
  returned:{
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  dateOut:{
    allowNull: true,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    field: 'date_out'
  },
  dateIn:{
    allowNull: true,
    type: DataTypes.DATE,
    field: 'date_in'
  },
};

class Lending extends Model{
  static associate(models){
    this.belongsTo(models.Book,{as: 'book'});
    this.belongsTo(models.Student,{as: 'student'});
  }

  static config(sequelize){
    return{
      sequelize,
      tableName: LENDING_TABLE,
      modelName: 'Lending',
      timestamps: false
    }
  }
}

module.exports = { LENDING_TABLE, LendingSchema, Lending };
