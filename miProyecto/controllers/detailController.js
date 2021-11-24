const db = require('../database/models'); //relaciona controlador con modelos
const Op = db.Sequelize.Op;

const detailController = {
    index: (req, res) => { 
        if(req.session.usuario && req.session.usuario.id == req.params.id){
            res.redirect('/profile')
        }
        db.User.findByPk(req.params.id,{
            include: [{
                association: 'posteosU'
            }, {
                association: 'comentariosU'
            }],
            order: [
                ['posteosU', 'created_at' , 'DESC'] 
            ]
            
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
            db.Post.create({ //un post con los siguientes datos
                    picture: req.file.filename, 
                    caption: req.body.pie,  //datos en input "pie" = name 
                    user_post_id: req.session.usuario.id //si está logueado, en user_post_id, va a poner el id del usuario logueado
                })
                .then(posteo => {
                    /*res.send(posteo)*/
                    res.redirect("/detail/post/id/" + posteo.id) //si está todo ok, nos manda al posteo creado  
                })
                .catch(err => {
                    console.log(err)
                    res.send(err)
                })
        } else {
            res.render('detailAdd', { //si no está todo ok, nos muestra la misma vista con los campos vacíos para que los llenemos
                error: 'No se pueden dejar campos vacíos'
            })
        }
    },

    edit: function (req, res) {
        if (req.session.usuario) {
            db.Post.findByPk(req.params.id)
            .then(posts => {
                res.render('detailEdit', {posts: posts})
            })
        } else {
            return res.redirect('/')
        }
    },
   
    update: function(req, res) {
        let id = req.params.id
        let fecha = new Date()
        db.Post.update({ 
            picture: req.file.filename, 
            caption: req.body.caption,
            user_post_id: req.session.usuario.id,
            updated_at: fecha
        },
        {
            where: {
                id: id
            }
        })
        .then(posteo => {
            /*res.send(posteo)*/
            res.redirect("/detail/post/id/" + id) 
        })
        .catch(err => {
            console.log(err)
            res.send(err)
        })
    },

    delete: function(req, res){
        let id = req.params.id
        db.Post.destroy({
            where: {
                id: id
            }
        })
        .then(posts => {
            res.redirect('/')
        })
        .catch(err => {
            console.log(err)
            res.send(err)
        })
    },

    post: (req, res) => { 
        db.Post.findByPk(req.params.id,{
            include: [{
                association:'usuarios'},{
                    association: 'comentarios',
                    include:{
                        association: 'comentarios1'
                    }
                }],
                
                order: [
                    ['comentarios', 'created_at' , 'DESC']
                 ]
            }).then(post => {
                res.render('detailPost', {
                    post: post
                });
            })
    },

    // metodo para agregar comentarios
    comentarios: function (req,res) {
     if (!req.session.usuario){
         res.redirect('/login');
     }
     db.Comment.create({
        comentario: req.body.comentarios,
        comment_post_id: req.params.id,
        comment_user_id: req.session.usuario.id,
     })
     
     .then(resultado => {
         res.redirect('/detail/post/id/'+ req.params.id)
     })
    },

    

}

module.exports = detailController

//if (req.session.usuario) { // si esta logueado agregar comentario // esto no funciona
//    res.render('detailPost',)
//} else {
//  return res.redirect('/login') // si no esta logueado mandar a login
//}

//db.User.findByPk(req.params.id,{
//    include: [
//       {association: 'posteosU'}, 
//        {association: 'comentariosU'}
//    ],
//    order: [
//        ["createdAt", "DESC"]
//    ],  
//    })
//
//    .then(comentarios => {
//        res.render('detailPost', { });
//    })