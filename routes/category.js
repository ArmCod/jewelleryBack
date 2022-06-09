var express = require('express');
var router = express.Router();
const categoryController = require('../controllers/categoryController')
const adminMiddleware = require('../middlewares/adminMiddleware')

//user routes
router.get('/', categoryController.getAll)


//admin routes
router.post('/', adminMiddleware, categoryController.create)
router.post('/edit', adminMiddleware, categoryController.edit)
router.post('/delete', adminMiddleware, categoryController.deleteCategory)

module.exports = router

