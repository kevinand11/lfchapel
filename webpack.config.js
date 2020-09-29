const path = require('path')

module.exports = {
	resolve: {
		alias:{
			'@': require('path').resolve(__dirname,'src'),
			'@/app': require('path').resolve(__dirname,'src/application'),
			'@modules': path.join(__dirname, 'src/modules'),
		}
	}
}
