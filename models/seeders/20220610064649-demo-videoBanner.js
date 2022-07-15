'use strict';
const data = require("../utils/data/secondData").videoBanner
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('VideoBanners', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('VideoBanners', null, {});
  }
};
