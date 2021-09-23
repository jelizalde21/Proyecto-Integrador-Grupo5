const data = require('../data/usuarios')
const posts = require('../data/posteos')

const profileController = {
    index: function (req, res) {
        res.render ('profile' , {users: data.lista, listaPosts: posts.lista})
    },
    edit: function (req, res) {
        res.render ('profileEdit')
    }
}

module.exports = profileController