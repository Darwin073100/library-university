'use strict';

const { LENDING_TABLE, LendingSchema } = require('../models/lending.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(LENDING_TABLE, LendingSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(LENDING_TABLE);
  }
};
