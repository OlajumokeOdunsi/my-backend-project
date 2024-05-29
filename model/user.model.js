const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require("./connection")

// STRUCTURING THE SCHEMA
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    accountnumber: {
        type: DataTypes.DOUBLE,
        allowNull:false,
    },
    balance: {
        type:DataTypes.DECIMAL,
        allowNull:false,

    }
}, {
    tableName: 'users',
    timestamps: false
});


module.exports = User