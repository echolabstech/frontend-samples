const path = require('path');

module.exports = {
	watch: true,
	mode: 'development',
	entry: './fetch-neighborhoods.js',
	output: {
		filename: './bundle.js',
		path: path.resolve(__dirname)
	}
};