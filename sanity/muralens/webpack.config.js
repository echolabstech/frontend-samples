const path = require('path');

module.exports = {
	watch: true,
	mode: 'development',
	entry: './muralens/batch-create-neighborhoods.js',
	output: {
		filename: './muralens/bundle.js',
		path: path.resolve(__dirname)
	}
};