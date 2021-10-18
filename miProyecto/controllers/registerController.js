const db = require('../database/models'); //relaciona controlador con modelos
const Op = db.Sequelize.Op;

const registerController = {
    index: function (req, res) {
        res.render ('register')
    }
}

module.exports = registerController