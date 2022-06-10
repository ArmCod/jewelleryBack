'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContactUs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ContactUs.init({
    subject: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    message: DataTypes.STRING(1234)
  }, {
    sequelize,
    modelName: 'ContactUs',
  });
  return ContactUs;
};