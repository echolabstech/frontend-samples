const path = require('path');

module.exports = {
	watch: true,
	entry: ['./client.js', './fetch-neighborhoods.js', './search-neighborhoods.js'],
	output: {
		filename: './bundle.js',
		path: path.resolve(__dirname)
	}
};