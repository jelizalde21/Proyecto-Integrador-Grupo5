var express = require('express');
var router = express.Router();
const detailController = require('../controllers/detailController');


/* GET home page. */
router.get('/user', detailController.user);
router.get('/add', detailController.add);
router.get('/post/id/:id', detailController.post);

module.exports = router;