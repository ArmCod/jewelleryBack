var express = require('express');
var router = express.Router();
const aboutController = require('../controllers/aboutUsController')
const adminMiddleware = require('../middlewares/adminMiddleware')

//up
router.post('/up', adminMiddleware, aboutController.createUp)
router.get('/up', aboutController.createUp)
router.post('/editUp', adminMiddleware, aboutController.editUp)

// down
router.post('/down', adminMiddleware, aboutController.createDown)
router.get('/down', aboutController.createDown)
router.post('/editDown', adminMiddleware, aboutController.editDown)

module.exports = router