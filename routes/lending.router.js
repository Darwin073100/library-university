const express = require('express');
const LendingService = require('../service/lending.service');
const validatorHandler = require('../middlewares/validator.handler');
const {
  createLendingSchema,
  updateLendingSchema,
  getLendingSchema,
} = require('../schema/lending.schema');

const router = express.Router();
const service = new LendingService();

router.get('/', async (req, res, next) => {
  try {
    const lending = await service.findAll();
    res.json(lending);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
  validatorHandler(getLendingSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const lending = await service.findOne(id);
      res.json(lending);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  validatorHandler(createLendingSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newLending = await service.create(body);
    res.status(201).json(newLending);
  }
);

router.patch(
  '/:id',
  validatorHandler(getLendingSchema, 'params'),
  validatorHandler(updateLendingSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const lending = await service.update(id, body);
      res.json(lending);
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
