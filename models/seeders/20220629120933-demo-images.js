'use strict';
const data = require("../utils/data/secondData").images
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Images', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Images', null, {});
  }
};
