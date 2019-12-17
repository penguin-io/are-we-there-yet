var jwt = require('jsonwebtoken')

var config = require('../config/config')

const app = exports

var secret_key = config.secret_key

app.secret_key = secret_key

app.checkAuth = (req,res, next)=>{
    try{
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, secret_key);
        req.userData =  decoded;
        next();
    }catch(err){
        return res.status(401).json({message : 'auth failed'})
    }
}