var express = require('express');
var router = express.Router();
const controller = require('../controllers/profileController');
const multer = require('multer');
const path = require('path')

/*CONFIGURACIÓN MULTER*/ 
 let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/portadas')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    },
});
let upload = multer({ storage: storage })



/* GET home page. */
router.get('/', controller.index);
router.get('/edit/:id', controller.edit);
router.post('/edit/:id', upload.single('portada'), controller.editUser);
 

module.exports = router;