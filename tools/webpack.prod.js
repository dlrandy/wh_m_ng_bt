var path = require( 'path' );
var webpack = require( 'webpack' );
var CompressionPlugin = require( 'compression-webpack-plugin' );
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var webpackProdConfig = {
    overrides: {
        entry: {
            app: [
                 path.resolve(__dirname,'../src/app/root.js')
            ]
        }
    },

    loaders: [
        {
            test: /\.js$/,
            loaders: [ 'ng-annotate', 'babel' ],
            include: path.join( __dirname, '../src', 'app' ),
            exclude: path.join( __dirname, '../node_modules' )
        },
        {
        // Take out css into file
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css?sourceMap!resolve-url!sass?sourceMap=true&sourceMapContents=true'
        ),
        exclude: '/node_modules/'
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico)$/,
        loader: 'file?name=assets/images/[hash].[ext]'
      },
      {
        test: /\.((woff2?|svg)(\?v=[0-9]\.[0-9]\.[0-9]))|(woff2?|svg)$/,
        loader: "url?limit=10000&name=assets/fonts/[name].[hash].[ext]"
      },
      {
        test: /\.((ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9]))|(ttf|eot)$/,  
        loader: "file?name=assets/fonts/[name].[hash].[ext]"
      }
    ],

    plugins: [
        new webpack.DefinePlugin( {
            'process.env': {
                NODE_ENV: JSON.stringify( 'production' )
            }
        } ),
        new webpack.optimize.DedupePlugin(),
        new ExtractTextPlugin('assets/styles/[name].[hash].css'),
        new webpack.optimize.UglifyJsPlugin(),
        new CompressionPlugin({
            asset: '{file}.gz',
            algorithm: 'gzip',
            threshold: 10240,
            minRatio: 0.8
        } )
    ]
};

module.exports = require( './webpack.base' )( webpackProdConfig );