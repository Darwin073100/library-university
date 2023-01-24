const { Model, DataTypes, Sequelize } = require('sequelize');

const STUDENT_TABLE = 'students';

const StudentSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  lastName:{
    allowNull: false,
    type: DataTypes.STRING,
    field: 'last_name'
  },
  numControl:{
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    field: 'num_control'
  },
  address:{
    allowNull: true,
    type: DataTypes.STRING
  },
  email:{
    allowNull: true,
    type: DataTypes.STRING
  },
  dateBirth:{
    allowNull: true,
    type: DataTypes.DATE,
    field: 'date_birth'
  },
};

module.exports = { STUDENT_TABLE, StudentSchema };
