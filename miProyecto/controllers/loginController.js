const db = require('../database/models'); //relaciona controlador con modelos
const Op = db.Sequelize.Op;

const loginController = {
    index: function (req, res) {
        res.render ('login')
    }
}

module.exports = loginController