const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require("./connection")

// STRUCTURING THE SCHEMA
class Transaction extends Model { }
Transaction.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        sourceaccount: DataTypes.DOUBLE,
        amountsent: DataTypes.DECIMAL,
        recipentaccount: DataTypes.DOUBLE,
        recipentbalance: DataTypes.DECIMAL
    },
    { sequelize, modelName: 'transactions', timestamps: false, },
);


module.exports = Transaction