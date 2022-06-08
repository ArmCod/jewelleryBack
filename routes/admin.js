var express = require('express');
var router = express.Router();
const adminController = require('../controllers/adminController')
const adminMiddleware = require('../middlewares/adminMiddleware')
router.post('/create',adminMiddleware,adminController.create)
router.get('/',adminMiddleware,adminController.getAll)
router.post('/delete',adminMiddleware,adminController.deleteAdmin)
router.post('/login',adminController.login)
router.post('/logout',adminMiddleware,adminController.logout)

module.exports = router