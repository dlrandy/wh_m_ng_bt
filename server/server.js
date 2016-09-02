import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import compression from 'compression'
import fs from 'fs';


const __PROD__ = process.env.NODE_ENV === 'production'
const __TEST__ = process.env.NODE_ENV === 'test'
const port = process.env.PORT || 5000
const server = express()

server.disable('x-powered-by')
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

if (__PROD__ || __TEST__) {
  const config = require('../tools/webpack.prod')
  server.use(morgan('combined'))
  server.use(compression())
} else {
  server.use(morgan('dev'))
  const config = require('../tools/webpack.dev')
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const compiler = webpack(config)
  server.use(webpackDevMiddleware(compiler, { quiet: true }))
  server.use(webpackHotMiddleware(compiler, { log: console.log }))
}
server.use(express.static('public'))

server.get('*', (req, res) => {
  fs.readFile(path.join(__dirname, '../app/assets/', 'index.html'), {
          encoding: 'utf-8'
        }, (err, source) => {
          if (err) return res.end('服务器开小差了(><)||');

          const template = _.template(source);

          res.write(template({ html: '', initialState: 'undefined', env }));
          res.end();
        });

})

server.listen(port, '0.0.0.0', (err) => {
  if (__PROD__ || __TEST__) {
    console.log('Starting production application....'+port)
  } else {
    console.log('Starting development application....'+port)
  }
})


module.exports = server