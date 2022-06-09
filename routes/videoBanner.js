var express = require('express');
var router = express.Router();
const videosController = require('../controllers/videoBannerController')
const adminMiddleware = require('../middlewares/adminMiddleware')

router.get('/',videosController.getAll)
//admin routes
router.post('/',adminMiddleware,videosController.create)
router.post('/',adminMiddleware,videosController.edit)

module.exports = router