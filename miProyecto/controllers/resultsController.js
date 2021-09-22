const db = require('../data/usuarios');

const controller = {
    index: function (req, res) {
        return res.send(Data.lista);
    },
    show: function (req, res) {
       
                    return res.render('results')            
            

        }
 
}
module.exports = controller