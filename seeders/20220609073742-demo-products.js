'use strict';
const data = require("../utils/data/data").products
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', data, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
