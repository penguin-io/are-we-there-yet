var conn = require('../database/database')

const app = exports

app.getOrders = (req, res)=>{
    conn.query("select * from orders INNER JOIN carts ON orders.id=carts.order_id orderby id desc", (err, rows)=>{
        if(err) res.status(400).json(err)
        else res.json(rows)
    })
}


app.getCarts = (req, res)=>{
    var user_id = req.body.user_id
    conn.query("select * from carts where user_id = " + user_id + " and order_id is null", (err, rows)=>{
        if(err) res.status(400).json(err)
        else res.json(rows[0])
    })
}

app.addCart = (req, res)=>{
    var user_id = req.body.user_id
    var item_id = req.body.item_id
    var qty = req.body.qty
    conn.query("INSERT INTO carts (user_id, item_id, qty) values('" + user_id + "','" + item_id + "','" + qty + ")", (err, result)=>{
        if(err) res.status(400).json(err)
        else res.json(result)
    })
}

app.changeCart = (req, res)=>{
    var item_id = req.body.item_id
    var qty = req.body.qty
    conn.query("update carts set qty= '" + qty + "'where item_id = " + item_id, (err, result)=>{
        if(err) res.status(400).json(err)
        else res.json(result)
    })
}

app.deleteCart = (req, res)=>{
    var item_id = req.params.item_id
    conn.query("DELETE from carts where item_id = " + item_id, (err, result)=>{
        if(err) res.status(400).json(err)
        else res.json(result)
    })
}

app.addOrder = (req, res)=>{
    var user_id = req.body.user_id
    var status = 'unpaid'
    conn.query("INSERT INTO orders (user_id, status) values('" + user_id + "','" + status + "')", (err, result)=>{
        if(err) res.status(400).json(err)
        else {
            conn.query("update carts set order_id = '" + result.insertId + "'where order_id is null", (err, result)=>{
                if(err) res.status(400).json(err)
                else res.json(result)
            })
        }
    })
}

app.changeOrder = (req, res)=>{
    var id = req.params.id
    var order_id = req.body.order_id
    var user_id = req.body.user_id
    var type = req.body.type
    var total = req.body.total
    var address = req.body.address
    var phone_number = req.body.phone_number
    var status = 'paid'
    conn.query("INSERT INTO billing (order_id, user_id, type, status, total, address, phone_number) values('" + order_id + "','" + user_id + "','" + type + "','" + status + "','" + total + "','" + address + "','" + phone_number + ")", (err, result)=>{
        if(err) res.status(400).json(err)
        else {
            conn.query("update orders set status = '" + status + "'where id = " + id, (err, result)=>{
                if(err) res.status(400).json(err)
                else res.json(result)
            })
        }
    })
}

app.cancelOrder = (req, res)=>{
    var id = req.params.id
    var status = 'cancel'
    conn.query("update orders set status = '" + status + "'where id = " + id, (err, result)=>{
        if(err) res.status(400).json(err)
        else res.json(result)
    })
}