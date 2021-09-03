var express = require('express');
var router = express.Router();
const controller = require('../controllers/detailController');

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/

/* GET home page. */
router.get('/detailUser', function(req, res, next) {
    res.render('detailUser' );
  });


module.exports = router;