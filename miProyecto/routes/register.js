let express = require('express');
let router = express.Router();
const multer = require('multer');
const path = require('path')

const controller = require('../controllers/registerController');

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
router.post('/', controller.createUser);
router.post('/', upload.single('portada'), controller.store)

module.exports = router;