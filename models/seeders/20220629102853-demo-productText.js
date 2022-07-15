'use strict';
const data = require("../utils/data/secondData").productText
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ProductTexts', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ProductTexts', null, {});
  }
};
