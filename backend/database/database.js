var mysql = require('mysql')
var config = require('../config/config')

var conn = mysql.createConnection(config.database)

module.exports = conn;