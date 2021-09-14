var express = require('express');
var router = express.Router();
const controller = require('../controllers/resultsController');

/* GET home page. */
router.get('/', controller.index);
router.get('/results/id/:id', controller.show);

module.exports = router;