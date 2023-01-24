const express = require('express');
const BookService = require('../service/book.service');
const validatorHandler = require('../middlewares/validator.handler');
const {
  createBookSchema,
  updateBookSchema,
  getBookSchema,
} = require('../schema/book.schema');

const router = express.Router();
const service = new BookService();

router.get('/', async (req, res, next) => {
  try {
    const books = await service.findAll();
    res.json(books);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
  validatorHandler(getBookSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const book = await service.findOne(id);
      res.json(book);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  validatorHandler(createBookSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newBook = await service.create(body);
    res.status(201).json(newBook);
  }
);

router.patch(
  '/:id',
  validatorHandler(getBookSchema, 'params'),
  validatorHandler(updateBookSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const book = await service.update(id, body);
      res.json(book);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json(rta);
});

module.exports = router;
