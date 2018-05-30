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
  storage: './db/products.sqlite'
});

sequelize
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
  const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
});

// force: true will drop the table if it already exists
User.sync({force: true}).then(() => {
  // Table created
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
});
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

module.exports = sequelize;
