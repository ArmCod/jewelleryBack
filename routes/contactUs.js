var express = require('express');
var router = express.Router();
const contactsUsController = require('../controllers/contactUsController')
const adminMiddleware = require('../middlewares/adminMiddleware')

router.post('/', contactsUsController.create)
module.exports = router