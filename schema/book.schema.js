const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().max(60);
const editorial = Joi.string();
const author = Joi.string();
const type = Joi.string();
const numPages = Joi.number();
const price = Joi.number();

const getBookSchema = Joi.object({
  id: id.required()
});

const createBookSchema = Joi.object({
  name: name.required(),
  editorial: editorial.required(),
  author: author.required(),
  type: type.required(),
  numPages: numPages.required(),
  price: price.required(),
});

const updateBookSchema = Joi.object({
  name,
  editorial,
  author,
  type,
  numPages,
  price,
});

module.exports = {
  getBookSchema,
  createBookSchema,
  updateBookSchema
};
