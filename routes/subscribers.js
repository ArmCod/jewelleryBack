var express = require('express');
var router = express.Router();
const subscribersController = require('../controllers/subscribersController')
const adminMiddleware = require('../middlewares/adminMiddleware')

router.post('/',subscribersController.create)
router.get('/',adminMiddleware,subscribersController.getAll)
router.post('/delete',adminMiddleware,subscribersController.deleteSubscriber)

module.exports = router