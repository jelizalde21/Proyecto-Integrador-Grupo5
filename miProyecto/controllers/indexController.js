const db = require('../database/models'); //relaciona controlador con modelos
const Op = db.Sequelize.Op;

const data = require('../data/usuarios');
const posts = require('../data/posteos');

const indexController = {
    index: function (req, res) {
        res.render ('index', {users: data.lista, listaPosts: posts.lista})
    },
    /*show: function (req, res) {
       res.render ('index', {posts: posts.lista})
    },*/
}

module.exports = indexController