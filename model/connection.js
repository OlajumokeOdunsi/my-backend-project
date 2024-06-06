const {Sequelize} = require("sequelize")
const sequelize = new Sequelize('defaultdb', 'avnadmin', process.env.DATABASE_PASSWORD, {
    host: 'mysql-37cc2c1b-jumaiodunsi-97e6.e.aivencloud.com',
    dialect: "mysql",
    port: '19916'
  });
  
  
  module.exports = sequelize