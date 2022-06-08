var express = require('express');
var router = express.Router();
const contactsController = require('../controllers/contactsController')
const adminMiddleware = require('../middlewares/adminMiddleware')

router.post('/',adminMiddleware,contactsController.edit)
router.get('/',adminMiddleware,contactsController.getAll)

module.exports = router