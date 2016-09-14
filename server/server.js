import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import compression from 'compression'
import fs from 'fs';
import _ from 'lodash';

const __PROD__ = process.env.NODE_ENV === 'production'
const __TEST__ = process.env.NODE_ENV === 'test'
const port = process.env.PORT || 5000
let server;

if (__PROD__ || __TEST__) {
    server = express()

    server.disable('x-powered-by')
    server.use(bodyParser.json())
    server.use(bodyParser.urlencoded({ extended: true }));
    const config = require('../tools/webpack.prod')
    server.use(morgan('combined'))
    server.use(compression());
    server.use('/static', express.static('static'))
        //这里设置不当会导致 打包的静态文件有错误
        // uncaught syntaxerror: unexpected token >

    server.get('*', (req, res) => {
        fs.readFile(path.join(__dirname, '../static/', 'index.html'), {
            encoding: 'utf-8'
        }, (err, source) => {
            if (err) return res.end('服务器开小差了');

            const template = _.template(source);

            res.write(template({ html: template }));
            res.end();
        });

    })

    server.listen(port, '0.0.0.0', (err) => {
        if (__PROD__ || __TEST__) {
            console.log('Starting production application....' + port)
        }
    })


} else {

    const config = require('../tools/webpack.dev')
    const webpack = require('webpack')
    const WebpackDevServer = require('webpack-dev-server')
    let compiler = webpack(config);
    server = new WebpackDevServer(compiler, {
        contentBase: __dirname+'../',
        // hot: true,
        historyApiFallback: true,//html5 mode
        compress: true,
        quiet: false,
        noInfo: false,
        inline: true,
        // lazy: true,
        // filename: "bundle.js",
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
        // It's a required option.
        publicPath: "/",
        headers: { "X-Custom-Header": "yes" },
        stats: { colors: true },
    
    });
  
    server.listen(5000, "localhost", function() {
      console.log('dev server running 5000.')
    });
}


module.exports = server
