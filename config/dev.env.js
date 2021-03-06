'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // API: '"http://192.168.1.254:8080/diantuo/"',
  API: '"https://dtwx3.doit10019.com/diantuo/"',
})
