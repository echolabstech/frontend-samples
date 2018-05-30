const csv=require('csvtojson');
const path = require('path');
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
let Products;

/**
* TODO:
* 1.) check if products.sqlite exists
* 2.) if not exits, create it, and seed the DB
* 3.) if exists, do nothing
* Might also be worth checking if the file is empty,
* or even doing a single query.
*/
function initDB() {
  sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    Products = sequelize.define('products', {
        ID: {
          type: Sequelize.BIGINT, // for lots of products
          primaryKey: true
        },
        Description: {
          type: Sequelize.STRING
        },
        lastSold: {
          type: Sequelize.STRING // could be Sequelize.DATE or Sequelize.DATEONLY
        },
        ShelfLife: {
          type: Sequelize.STRING
        },
        Department: {
          type: Sequelize.STRING
        },
        Price: {
          type: Sequelize.STRING
        },
        Unit: {
          type: Sequelize.STRING
        },
        xFor: {
          type: Sequelize.TINYINT // always a small number (i.e. single digit)
        },
        Cost: {
          type: Sequelize.STRING
        }
    });

    const csvFilePath=`${path.join(__dirname)}/products.csv`;
    csv()
    .fromFile(csvFilePath)
    .then((products)=>{
      console.log(products);
      Products.sync({force: true}).then(() => {
        products.forEach((product) => {
          return Products.create(product);
        });
      })
      .catch((error) => {
        console.log(error);
      });
    })
    .catch((error) => {
      console.log(error);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
}

function getProducts() {
  return Products.findAll();
}

module.exports = {initDB, getProducts};
