var express = require('express')
var router = express.Router()

var userController = require('../controllers/UserController')
var itemController = require('../controllers/ItemController')
var orderController = require('../controllers/OrderController')

router.get('/users',userController.getUsers)
router.get('/users/:id',userController.getUser)
router.post('/login',userController.login)
router.post('/sign_up',userController.addUser)
router.put('/users/:id',userController.editUser)
router.delete('/users/:id',userController.deleteUser)

router.get('/items',itemController.getItems)
router.get('/items/:id',itemController.getItem)
router.post('/items',itemController.addItem)
router.put('/items/:id',itemController.editItem)
router.delete('/items/:id',itemController.deleteItem)

router.get('/orders',orderController.getOrders)
router.post('/orders',orderController.addOrder)
router.put('/orders/:id',orderController.changeOrder)
router.put('/cancel/:id',orderController.cancelOrder)
router.get('/carts',orderController.getCarts)
router.post('/carts',orderController.addCart)
router.put('/carts',orderController.changeCart)
router.delete('/carts/:item_id',orderController.deleteCart)

module.exports = router