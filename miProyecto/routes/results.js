var express = require('express');
var router = express.Router();
const controller = require('../controllers/resultsController');

/* GET home page. */
router.get('/', controller.index);
router.get('/search', controller.show);
router.get('/searchUser', controller.showUser);
module.exports = router;