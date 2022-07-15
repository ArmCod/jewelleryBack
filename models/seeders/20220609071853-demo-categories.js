'use strict';
const data = require("../utils/data/data").categories
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', data, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
