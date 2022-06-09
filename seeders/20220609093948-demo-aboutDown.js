'use strict';
const data = require("../utils/data/secondData").aboutDown
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('AboutUsDowns', data, {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('AboutUsDowns', null, {});
    }
};
