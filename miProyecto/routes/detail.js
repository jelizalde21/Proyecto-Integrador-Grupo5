var express = require('express');
var router = express.Router();
const detailController = require('../controllers/detailController');

//Configuración MULTER
const multer = require('multer')
const path = require('path')

//Configuración MULTER
let storage = multer.diskStorage({
    destination: (req, file, cb) => { //dónde se guarda
        cb(null, 'public/images') 
    },
    filename: (req, file, cb) => { //nombre que va a tener el archivo
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)) //
    },
});
let upload = multer({ storage: storage })

/* GET home page. */
router.get('/user/id/:id', detailController.index);
router.get('/add', detailController.add);
router.get('/edit/:id', detailController.edit);
router.get('/post/id/:id', detailController.post);

router.post('/add', upload.single("picture"), detailController.create); //-----
router.post('/edit/:id', upload.single("picture"), detailController.update)
router.post('/delete/:id', detailController.delete)
router.post('/comentarios/:id', detailController.comentarios)

module.exports = router;