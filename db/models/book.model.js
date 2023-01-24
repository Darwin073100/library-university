const { Model, DataTypes, Sequelize } = require('sequelize');

const BOOK_TABLE = 'books';

const BookSchema = {
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  editorial:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  author:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  type:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  numPages:{
    allowNull: true,
    type: DataTypes.INTEGER,
    field: 'num_pages'
  },
  price:{
    allowNull: true,
    type: DataTypes.DOUBLE,
  }
};

module.exports = { BOOK_TABLE, BookSchema };
