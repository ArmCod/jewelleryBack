'use strict';
const data = require("../utils/data/secondData").aboutUp
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('AboutUsUps', data, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('AboutUsUps', null, {});
  }
};
