var express = require('express');
var router = express.Router();
const contactsController = require('../controllers/homeBannerController')
const adminMiddleware = require('../middlewares/adminMiddleware')

//user routes
router.post('/',contactsController.create)

//admin routes
router.get('/',adminMiddleware,contactsController.getAll)
router.post('/deleteSlide',adminMiddleware,contactsController.deleteSlide)
router.post('/editSlide',adminMiddleware,contactsController.editSlide)

module.exports = router