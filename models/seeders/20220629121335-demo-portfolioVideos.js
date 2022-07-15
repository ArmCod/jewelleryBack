'use strict';
const data = require("../utils/data/secondData").portfolioVideos
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('PortfolioVideos', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('PortfolioVideos', null, {});
  }
};
