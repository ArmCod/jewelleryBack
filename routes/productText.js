var express = require('express');
var router = express.Router();
const textController = require('../controllers/productTextController')
const adminMiddleWare = require('../middlewares/adminMiddleware')


//user routes
router.get('/', textController.getAll)
//admin routes
router.post('/', adminMiddleWare, textController.edit)

module.exports = router