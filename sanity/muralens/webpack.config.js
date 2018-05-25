const path = require('path');

module.exports = {
	watch: true,
	entry: ['./app.js'],
	output: {
		filename: './bundle.js',
		path: path.resolve(__dirname)
	}
};