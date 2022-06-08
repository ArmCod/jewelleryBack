'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }

    Product.init({
        nameHy: DataTypes.STRING,
        nameRu: DataTypes.STRING,
        nameEn: DataTypes.STRING,
        descriptionHy: DataTypes.STRING(1234),
        descriptionRu: DataTypes.STRING(1234),
        descriptionEn: DataTypes.STRING(1234),
        video: DataTypes.STRING,
        categoryId: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Product',
    });

    let Image = sequelize.define("ProductImage");
    let Order = sequelize.define("Order")
    Product.hasMany(Image, {
        foreignKey: "productId"
    })
    Product.hasMany(Order,{
        foreignKey:"productId"
    })

    return Product;
};