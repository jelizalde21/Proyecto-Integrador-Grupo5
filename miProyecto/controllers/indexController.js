const data = require('../data/usuarios')

const indexController = {
    index: function (req, res) {
        res.render ('index', {users: data.lista})
    }
}

module.exports = indexController