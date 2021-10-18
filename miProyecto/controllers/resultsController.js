const db = require('../database/models'); //relaciona controlador con modelos
const Op = db.Sequelize.Op;

const results = require('../data/usuarios');

const controller = {
    index: function (req, res) {
        return res.send(Data.lista);
    },
    show: function (req, res) {
       
                    return res.render('results')            
            

        }
 
}
module.exports = controller