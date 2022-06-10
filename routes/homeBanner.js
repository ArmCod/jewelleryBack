var express = require('express');
var router = express.Router();
const contactsController = require('../controllers/homeBannerController')
const adminMiddleware = require('../middlewares/adminMiddleware')

//user routes
router.get('/',contactsController.getAll)

//admin routes
router.post('/',adminMiddleware,contactsController.create)
router.post('/deleteSlide',adminMiddleware,contactsController.deleteSlide)
router.post('/editSlide',adminMiddleware,contactsController.editSlide)

module.exports = router