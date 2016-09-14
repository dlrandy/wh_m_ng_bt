var path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var webpackDevConfig = {
	overrides: {
		devtool: 'eval',
		debug: true,
		entry: {
			app: [
			'webpack-dev-server/client?http://localhost:5000/',
            'webpack/hot/dev-server',
				 path.resolve(__dirname,'../src/app/root.js')
			]
		},
		output: {
			publicPath: 'http://localhost:5000/'
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
        // new CleanWebpackPlugin(['static'], {
        //       root: __dirname + '/../',
        //       verbose: true, 
        //       dry: false,
        //       // exclude: ['shared.js']
        // }),
		new webpack.DefinePlugin( {
            'process.env': {
                NODE_ENV: JSON.stringify( 'development' )
            }
        } )
	]
};

module.exports = require('./webpack.base')(webpackDevConfig);