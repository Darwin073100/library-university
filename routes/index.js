const express = require('express');

const bookRouter = require('./book.router');
const studentRouter = require('./student.router');
const lendingRouter = require('./lending.router');

function routerApi(app){
  const router = express.Router();
  app.use('/api/v1/', router);
  router.use('/books', bookRouter);
  router.use('/students', studentRouter);
  router.use('/lending', lendingRouter);
}

module.exports = routerApi;
