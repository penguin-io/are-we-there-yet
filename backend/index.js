var http = require('http')
var express = require('express')
var app = express()
var bodyParser = require('body-parser')

var routes = require('./routes/api')
var config = require('./config/config')

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    if (req.method === "OPTIONS") {
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        return res.status(200).json({});
    }
    next();
}); 
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

app.use('/', routes)

http.createServer(app)
.listen(config.port, ()=>{
    console.log('Server is running')
})