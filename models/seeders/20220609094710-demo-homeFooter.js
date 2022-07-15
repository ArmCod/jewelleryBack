'use strict';
const data = require("../utils/data/secondData").homeFooter
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('HomeFooters', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('HomeFooters', null, {});
  }
};
