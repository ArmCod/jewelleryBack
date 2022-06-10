var express = require('express');
var router = express.Router();
const aboutController = require('../controllers/aboutUsController')
const adminMiddleware = require('../middlewares/adminMiddleware')

//up
router.get('/up', aboutController.getAllUp)

//admin routes
router.post('/up',adminMiddleware, aboutController.createUp)
router.post('/editUp', adminMiddleware, aboutController.editUp)

// down
router.get('/down', aboutController.getAllDown)

//admin routes
router.post('/down', aboutController.createDown)
router.post('/editDown', adminMiddleware, aboutController.editDown)

module.exports = router