var Base = require('../models/baseData')
var Pages = require('../models/pages')
var PageData = require('../models/pageData')

const app = exports

app.getData = async (req, res)=>{
    var base
    var about
    var contact
    var pagedata
    var pages
    await Base.findOne({  where: {user_id: 1} }).then(data => {
        base = data
    })
    await Pages.findAll({  where: {user_id: 1} }).then(data => {
        pages = data
    })
    await PageData.findAll({  where: {user_id: 1} }).then(data => {
        if(data.length != 0){
            pagedata = data.filter(p =>{
                return p.type == 'posts'
            })
            contact = data.filter(p =>{
                return p.type == 'contact'
            })
            about = data.filter(p =>{
                return p.type == 'about'
            })
        }
    })
    res.json({
        data : base,
        pages : pages,
        posts : pagedata,
        contact : contact[0],
        about : about[0]
    })
}

app.getItem = (req, res)=>{
    var id = req.params.id
    
}

app.addItem = (req, res)=>{
    var name = req.body.name
    var price = req.body.price
    
}

app.editItem = (req, res)=>{
    var id = req.params.id
    var name = req.body.name
    var price = req.body.price
    
}

app.deleteItem = (req, res)=>{
    var id = req.params.id
    
}