const db = require('../database/models'); // relaciona controlador con modelos
const Op = db.Sequelize.Op;

const profileController = {
    index: function (req, res) {
        res.render ('profile' , {users: data.lista, listaPosts: posts.lista})
    },
    edit: function (req, res) {
        res.render ('profileEdit')
    }
};

module.exports = profileController