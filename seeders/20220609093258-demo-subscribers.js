'use strict';
const data = require("../utils/data/secondData").subscribers
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Subscribers', data, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Subscribers', null, {});
  }
};
