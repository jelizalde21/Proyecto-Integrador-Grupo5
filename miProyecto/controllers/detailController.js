const db = require('../database/models'); //relaciona controlador con modelos
const Op = db.Sequelize.Op;

const data = require('../data/usuarios')
const posts = require('../data/posteos')

const detailController = {
    user: function (req, res) {
        res.render ('detailUser', {users: data.lista, listaPosts: posts.lista})
    },
    add: function (req, res) {
        res.render ('detailAdd')
    },
    post: function (req, res) {
        let idPost = req.params.id;
        let postEncontrado = posts.findById(idPost);

       res.render ('detailPost', {listaPost: postEncontrado})
       /*res.send(postEncontrado);*/
    },
    posteos: function(req, res){
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
    }
}

module.exports = detailController