var express = require('express');
var router = express.Router();
const controller = require('../controllers/loginController');

/* GET home page. */
router.get('/', controller.index);

router.post('/', controller.login);

router.post('/logout', controller.logout);

module.exports = router;