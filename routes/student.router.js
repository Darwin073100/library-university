const express = require('express');
const StudentService = require('../service/student.service');
const validatorHandler = require('../middlewares/validator.handler');
const {
  createStudentSchema,
  updateStudentSchema,
  getStudentSchema,
} = require('../schema/student.schema');

const router = express.Router();
const service = new StudentService();

router.get('/', async (req, res, next) => {
  try {
    const students = await service.findAll();
    res.json(students);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
  validatorHandler(getStudentSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const student = await service.findOne(id);
      res.json(student);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  validatorHandler(createStudentSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newStudent = await service.create(body);
    res.status(201).json(newStudent);
  }
);

router.patch(
  '/:id',
  validatorHandler(getStudentSchema, 'params'),
  validatorHandler(updateStudentSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const student = await service.update(id, body);
      res.json(student);
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
