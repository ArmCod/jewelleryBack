var express = require('express');
var router = express.Router();
const detailFooterController = require('../controllers/homeFooterConroller')
const adminMiddleware = require('../middlewares/adminMiddleware')


//admin route
router.post('/',adminMiddleware,detailFooterController.create)
router.post('/edit',adminMiddleware,detailFooterController.edit)

//user router
router.get('/',detailFooterController.getAll)

module.exports = router