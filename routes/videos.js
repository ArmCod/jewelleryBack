var express = require('express');
var router = express.Router();
const videosController = require('../controllers/videoController')
const adminMiddleware = require('../middlewares/adminMiddleware')

router.post('/',adminMiddleware,videosController.create)
router.get('/',videosController.getAll)
router.get('/single',videosController.getSingle)
router.post('/edit',adminMiddleware,videosController.edit)
router.post('/delete',adminMiddleware,videosController.deleteVideo)
module.exports = router