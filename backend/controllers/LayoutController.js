var conn = require('../database/database')

const app = exports

app.getItems = (req, res)=>{
    conn.query("select * from items", (err, rows)=>{
        if(err) res.status(400).json(err)
        else res.json(rows)
    })
}

app.getItem = (req, res)=>{
    var id = req.params.id
    conn.query("select * from items where id = " + id, (err, rows)=>{
        if(err) res.status(400).json(err)
        else res.json(rows[0])
    })
}

app.addItem = (req, res)=>{
    var name = req.body.name
    var price = req.body.price
    conn.query("INSERT INTO items (name, price) values('" + name + "','" + price + "')", (err, result)=>{
        if(err) res.status(400).json(err)
        else res.json(result)
    })
}

app.editItem = (req, res)=>{
    var id = req.params.id
    var name = req.body.name
    var price = req.body.price
    conn.query("update items set name = '" + name + "', price = '" + price + "' where id = " + id, (err, result)=>{
        if(err) res.status(400).json(err)
        else res.json(result)
    })
}

app.deleteItem = (req, res)=>{
    var id = req.params.id
    conn.query("DELETE from items where id = " + id, (err, result)=>{
        if(err) res.status(400).json(err)
        else res.json(result)
    })
}