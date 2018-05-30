var express = require('express');
var router = express.Router();
var getProducts = require('../db/orm.js').getProducts;

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Products Database' });
});

/*
* Get all products
*/
router.get('/api/products', function(req, res, next) {
	getProducts()
	.then((productInstances) => {
		const products = productInstances.map((product) => product);
		console.log(`all products:${products}`);
		res.json(products);
  	})
  	.catch((error) => {
  		console.log(error);
  		res.status(500).send(error);
  	});
});

module.exports = router;
