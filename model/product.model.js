const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require("./connection")

// STRUCTURING THE SCHEMA
class Product extends Model { }
Product.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        category: DataTypes.ENUM("bag", "shoe", "clothe", "glasses"),
        price: DataTypes.INTEGER,
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        image: DataTypes.STRING
    },
    { sequelize, modelName: 'product', timestamps: false,  },
);

module.exports = Product