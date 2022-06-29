var express = require('express');
var router = express.Router();
const portfolioController = require('../controllers/portfolioController')
const adminMiddleWare = require('../middlewares/adminMiddleware')


//images
router.get('/image', portfolioController.getAllIMages)
router.post('/deleteImage', portfolioController.deleteImage)
router.post('/image', portfolioController.createImage)

//videos
router.get('/video', portfolioController.getAllVideos)
router.post('/deleteVideo', portfolioController.deleteVideo)
router.post('/video', portfolioController.createVideos)

module.exports = router