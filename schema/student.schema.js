const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string();
const lastName = Joi.string();
const numControl = Joi.number().integer();
const address = Joi.string();
const email = Joi.string().email();
const dateBirth = Joi.string();

const getStudentSchema = Joi.object({
  id: id.required()
});
const createStudentSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  numControl: numControl.required(),
  address,
  email,
  dateBirth,
});

const updateStudentSchema = Joi.object({
  name,
  lastName,
  numControl,
  address,
  email,
  dateBirth,
});

module.exports = { createStudentSchema, updateStudentSchema, getStudentSchema };
