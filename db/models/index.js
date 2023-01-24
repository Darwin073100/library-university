const { BookSchema, Book } = require('./book.model');
const { StudentSchema, Student } = require('./student.model');
const { LendingSchema, Lending } = require('./lending.model');

function setupModels(sequelize){
  Book.init(BookSchema, Book.config(sequelize));
  Student.init(StudentSchema, Student.config(sequelize));
  Lending.init(LendingSchema, Lending.config(sequelize));
};

module.exports = setupModels;
