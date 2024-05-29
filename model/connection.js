const {Sequelize} = require("sequelize")
const sequelize = new Sequelize('ecommerce', 'root', '93031532', {
    host: 'localhost',
    dialect: "mysql",
    port: '3306'
  });
  
  
  module.exports = sequelize