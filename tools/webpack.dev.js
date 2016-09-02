var path = require('path');
var webpack = require('webpack');

var webpackDevConfig = {
	overrides: {
		devtool: 'eval',
		debug: true,
		entry: {
			app: [
				'./src/app/root.js'
			]
		}
	},
	loaders: [
		{
            test: /\.js$/,
            loaders: [ 'ng-annotate', 'babel' ],
            include: path.join( __dirname, '../src', 'app' ),
            exclude: path.join( __dirname, '../node_modules' )
        }
	],
	plugins: [
		new webpack.DefinePlugin( {
            'process.env': {
                NODE_ENV: JSON.stringify( 'development' )
            }
        } )
	]
};

module.exports = require('./webpack.base')(webpackDevConfig);