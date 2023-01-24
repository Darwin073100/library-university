const Joi = require('joi');

const id = Joi.number().integer();
const bookId = Joi.number().integer();
const studentId = Joi.number().integer();
const dateOut = Joi.date();
const dateIn = Joi.date();

const getLendingSchema = Joi.object({
  id: id.required(),
});

const createLendingSchema = Joi.object({
  bookId: bookId.required(),
  studentId: studentId.required(),
  dateIn: dateIn.required(),
});

const updateLendingSchema = Joi.object({
  bookId,
  studentId,
  dateOut,
  dateIn,
});

module.exports = {
  getLendingSchema,
  createLendingSchema,
  updateLendingSchema,
};
