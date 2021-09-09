var express = require('express');
var router = express.Router();
const detailController = require('../controllers/detailController');


/* GET home page. */
router.get('/User', detailController.user);
router.get('/Add', detailController.add);
router.get('/Post', detailController.post);

module.exports = router;