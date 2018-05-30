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

    // const csvFilePath=`${path.join(__dirname)}/products.csv`;
    // const csvFilePath=`${path.join(__dirname)}/new-products.csv`;
    const csvFilePath=`${path.join(__dirname)}/data-example-1.csv`;

    const csv=require('csvtojson');
    csv()
    .fromFile(csvFilePath)
    .then((jsonObj)=>{
        console.log(jsonObj);
    })
    .catch((error) => {
      console.log(error);
    });

    // Products.sync({force: true}).then(() => {
    //   // Table created
    //   return Products.create({
    //     ID: 753542,
    //     Description: 'banana',
    //     lastSold: '9/5/2017',
    //     ShelfLife: '4d',
    //     Department: 'Produce',
    //     Price: '$2.99',
    //     Unit: 'lb',
    //     xFor: 1,
    //     Cost: '$0.44'
    //   });
    // });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
}

function getProducts() {
  return Products.findAll();
}

module.exports = {initDB, getProducts};
