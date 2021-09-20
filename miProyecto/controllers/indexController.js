const data = require('../data/usuarios');
const posts = require('../data/posteos');

const indexController = {
    index: function (req, res) {
        res.render ('index', {users: data.lista})
    },
    /*show: function (req, res) {
       res.render ('index', {posts: posts.lista})
    },*/
}

module.exports = indexController