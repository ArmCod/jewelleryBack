var express = require('express');
var router = express.Router();
const subscribersController = require('../controllers/subscribersController')
const adminMiddleware = require('../middlewares/adminMiddleware')


//user routes
router.post('/',subscribersController.create)

//admin routes
router.get('/',adminMiddleware,subscribersController.getAll)
router.post('/delete',adminMiddleware,subscribersController.deleteSubscriber)
//todo
router.post('/sendPost',adminMiddleware,subscribersController.sendAnswer)
module.exports = router