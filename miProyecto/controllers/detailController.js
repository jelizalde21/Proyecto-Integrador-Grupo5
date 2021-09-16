const data = require('../data/usuarios')
const posts = require('../data/posteos')

const detailController = {
    user: function (req, res) {
        res.render ('detailUser' /*, {users: data.lista}*/)
    },
    add: function (req, res) {
        res.render ('detailAdd')
    },
    post: function (req, res) {
        res.render ('detailPost'/*, {posts: posts.lista}*/)
    }
}

module.exports = detailController