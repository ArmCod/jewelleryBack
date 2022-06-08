var express = require('express');
var router = express.Router();
const orderController = require('../controllers/orderController')
const adminMiddleware = require('../middlewares/adminMiddleware')

router.post('/',orderController.create)
router.get('/',adminMiddleware,orderController.getAll)
router.post('/delete',adminMiddleware,orderController.deleteOrder)

module.exports = router