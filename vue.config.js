const path = require('path');

module.exports = {
	devServer: {
		host: 'app.e-commerce.test'
	},
	configureWebpack: {
		resolve: {
			alias: {
				'@': path.resolve(__dirname, 'src')
			},
		},
	},
	css: {
		sourceMap: true
	}
}
