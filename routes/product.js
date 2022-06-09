var express = require('express');
var router = express.Router();
const prodController = require('../controllers/productController')
const adminMiddleWare = require('../middlewares/adminMiddleware')


//user routes
router.get('/',prodController.getAll)
router.get('/single',prodController.getSingle)
//admin routes
router.post('/',adminMiddleWare,prodController.create)
router.post('/edit',adminMiddleWare,prodController.edit)
router.post('/delete',adminMiddleWare,prodController.deleteProduct)
router.post('/deleteImage',adminMiddleWare,prodController.deleteImage)
router.post('/editImage',adminMiddleWare,prodController.editImage)

module.exports = router