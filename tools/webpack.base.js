var _ = require('lodash');
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var pathApp;

function pathTo() {
	return path.join(__dirname+'../', 'src', path.join.apply(path, arguments))
}

pathApp = _.partial(pathTo, 'app');

module.exports = function (options) {
	var config = _.merge({}, {
		entry: {
			vendor: [
                'bootstrap/dist/css/bootstrap.min.css',
                'bootstrap/dist/css/bootstrap-theme.min.css',
                'jquery',
                'bluebird',
                'lodash',
                'angular',
                'angular-animate',
                'angular-aria',
                'angular-ui-router',
                'bootstrap/dist/js/bootstrap.js'
			]
		},
		output: {
			path: path.resolve(__dirname, '../', 'static'),/*'build'*/
			filename: 'js/[name]-[hash].js',
            chunkFilename: 'js/[chunkhash].js',
			publicPath: '/static'
		},
		plugins: [
			new webpack.HotModuleReplacementPlugin(),
			new webpack.NoErrorsPlugin(),
			new webpack.ProvidePlugin({
				jQuery: 'jquery',
                $: 'jquery',
                'window.jQuery': 'jquery'
			}),
			new HtmlWebpackPlugin({
				template: 'src/assets/index.html',
				inject: 'body'
			}),
			new webpack.optimize.CommonsChunkPlugin( 'vendor', 'js/vendor-[hash].js' )
		],
		resolve: {
			extensions: ['', '.js'],
			alias: {
				app: pathApp('app.js'),
		    	assets: pathApp('assets'),
				jquery: 'jquery/dist/jquery.min.js',
			}
	    },
	    module: {
	    	loaders: [
 				{
                    test: /\.html$/,
                    exclude: `${path.join(__dirname, "../src/assets/index.html")}`,
                    //ReferenceError: window is not defined html-webpack-plugin

                    loader: 'ngtemplate?' + (path.resolve(__dirname, '../src')) + '/!html'
                },
                {
                    test: /\.scss$/,
                    loader: 'style-loader!css!sass'
                },
                {
                    test: /\.css$/,
                    loader: 'style-loader!css-loader'
                },
                { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
                { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
                { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
                { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
                { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
                {
                    test: /\.(png|jpg|gif)/,
                    loader: 'file-loader?name=assets/[hash][name].[ext]'
                }

	    	],
	    	resolveLoader: {
            root: path.join( __dirname, '..','node_modules' )
        }
	    }
	}, options.overrides);

	config.module.loaders = _.union( config.module.loaders, options.loaders );
    config.plugins = _.union( config.plugins, options.plugins );

    return config
}























