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
            db.Post.create({ //un post con los siguientes datos
                    picture: req.file.filename, //datos en input
                    caption: req.body.caption,
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
    /*edit: function (req, res) {
        if (req.session.usuario != undefined) {
            db.Post.findByPk(req.params.id,)
            .then(posts => {
                return res.render('detailEdit', {posts: posts})
            })
        } else {
            return res.redirect('/login')
        }
    },*/
    update: function(req, res) {
        let id = req.params.id
        db.Post.update({ 
            picture: req.file.filename, 
            caption: req.body.caption,
            user_post_id: req.session.usuario.id
        },
        {
            where: {
                id: id
            }
        })
        .then(posteo => {
            res.send(posteo)
            /*res.redirect("/detail/post/id/" + posteo.id)  */
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
                all:true,
                nested: true}],
            
            }).then(post => {
                res.render('detailPost', {
                    post: post
                });
            })
    }

}

module.exports = detailController