const { Model, DataTypes, Sequelize } = require('sequelize');

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
    field: 'book_id'
  },
  studentId:{
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'student_id',
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
