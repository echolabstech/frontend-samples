const Sequelize = require('sequelize');
const sequelize = new Sequelize('products', 'admin', 'p@ssw0rd', {
  host: 'localhost',
  dialect: 'sqlite',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // SQLite only
  storage: './products.sqlite'
});

module.exports = sequelize;