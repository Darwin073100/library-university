'use strict';

const { STUDENT_TABLE, StudentSchema } = require('../models/student.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(STUDENT_TABLE, StudentSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(STUDENT_TABLE);
  }
};
