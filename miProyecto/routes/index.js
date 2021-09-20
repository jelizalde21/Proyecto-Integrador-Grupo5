var express = require('express');
var router = express.Router();
const controller = require('../controllers/indexController');

/* GET home page. */
router.get('/', controller.index);
/*router.get('/', controller.show);*/

module.exports = router;
