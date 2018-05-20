const path = require('path');

module.exports = {
	watch: true,
	mode: 'development',
	entry: './muralens/create-a-neighborhood.js',
	output: {
		filename: './muralens/bundle.js',
		path: path.resolve(__dirname)
	}
};