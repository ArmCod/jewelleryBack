var express = require('express');
var router = express.Router();
const orderController = require('../controllers/orderController')
const adminMiddleware = require('../middlewares/adminMiddleware')


//user routes
router.post('/',orderController.create)

//admin routes
router.get('/',adminMiddleware,orderController.getAll)
router.post('/delete',adminMiddleware,orderController.deleteOrder)

module.exports = router