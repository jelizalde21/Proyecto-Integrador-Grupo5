const data = require('../data/module')

const indexController = {
    index: function (req, res) {
        res.render ('index')
    }
}

module.exports = indexController