const db = require('../database/models'); //relaciona controlador con modelos
const Op = db.Sequelize.Op;

const detailController = {
    index: (req, res) => { 
        db.User.findByPk(req.params.id,{
            include: [{
                association: 'posteosU'
            }, {
                association: 'comentariosU'
            }],
            

            }).then(user => {
                res.render('detailUser', {
                    user: user
                });
            })
    },
    
    add: function (req, res) {
        if (req.session.usuario) {
            res.render('detailAdd')
        } else {
            return res.redirect('/')
        }
    },
    create: (req, res) => { 
        if (req.session.usuario) { //chequea que haya un usuario logueado
            db.Post.create({ //un producto con los siguientes datos
                    picture: req.file.filename, //datos en el input
                    caption: req.body.caption,
                    users_id: req.session.usuario.id //si está logueado, en users_id, va a poner el id del usuario logueado
                })
                .then(posteo => {
                    res.redirect("/detail/id/" + posteo.id) //si está todo ok, nos manda al producto creado  
                })
        } else {
            res.render('detailAdd', { //si no está todo ok, nos muestra la misma vista con los campos vacíos para que los llenemos
                error: 'No se pueden dejar campos vacíos'
            })
        }
    },

    post: (req, res) => { 
        db.Post.findByPk(req.params.id,{
            include: [{
                all:true,
                nested: true}],
            
            }).then(post => {
                res.render('detailPost', {
                    post: post
                });
            })
    }
   /* posteos: function(req, res){
        db.User.findAll({
            include: [{association: "posteos"}]
        })
        .then(posteoss =>{
            res.send(posteoss)
        })
    },
    comentarios: function(req, res){
        db.User.findAll({
            include: [{association: "comentarios"}]
        })
        .then(comentarioss =>{
            res.send(comentarioss)
        })
    }*/
}

module.exports = detailController