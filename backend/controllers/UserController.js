var conn = require('../database/database')
var auth = require('./AuthController')

const app = exports

app.login = (req, res)=>{
    var email = req.body.email
    var password = req.body.password
    conn.query("select * from users where email = '" + email + "' and password = '" + password + "'", (err, rows)=>{
        if(err) res.status(400).json(err)
        else {
            if(rows.length > 0) {
                var payload = {
                    id: rows[0].id,
                    email: rows[0].email
                }
                var token = jwt.sign(payload,auth.secret_key, {expiresIn : '2d'})
                res.json({
                    id: rows[0].id,
                    token: token
                })
            }
            else{
                res.status(400).json({message: 'email & password tidak valid'})
            }
        }
    })
}

app.getUsers = (req, res)=>{
    conn.query("select * from users", (err, rows)=>{
        if(err) res.status(400).json(err)
        else res.json(rows)
    })
}

app.getUser = (req, res)=>{
    var id = req.params.id
    conn.query("select * from users where id = " + id, (err, rows)=>{
        if(err) res.status(400).json(err)
        else res.json(rows[0])
    })
}

app.addUser = (req, res)=>{
    var firstname = req.body.firstname
    var lastname = req.body.lastname
    var email = req.body.email
    var password = req.body.password
    var type = 'member'
    conn.query("INSERT INTO users (firstname, lastname, email, password, type) values('" + firstname + "','" + lastname + "','" + email + "','" + password + "','" + type + "')", (err, result)=>{
        if(err) res.status(400).json(err)
        else {
            var payload = {
                id: result.insertId,
                email: email
            }
            var token = jwt.sign(payload,auth.secret_key, {expiresIn : '2d'})
            res.json({
                id: result.insertId,
                token: token
            })
        }
    })
}

app.editUser = (req, res)=>{
    var id = req.params.id
    var firstname = req.body.firstname
    var lastname = req.body.lastname
    var email = req.body.email
    var password = req.body.password
    conn.query("update users set firstname = '" + firstname + "', lastname = '" + lastname + "', email = '" + email + "', password = '" + password + "' where id = " + id, (err, result)=>{
        if(err) res.status(400).json(err)
        else res.json(result)
    })
}

app.deleteUser = (req, res)=>{
    var id = req.params.id
    conn.query("DELETE from users where id = " + id, (err, result)=>{
        if(err) res.status(400).json(err)
        else res.json(result)
    })
}