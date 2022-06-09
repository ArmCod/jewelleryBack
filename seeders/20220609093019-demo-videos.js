'use strict';
const data = require("../utils/data/secondData").videos
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Videos', data, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Videos', null, {});
  }
};
