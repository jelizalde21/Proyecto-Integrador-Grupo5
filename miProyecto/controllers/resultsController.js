const db = require('../data/module');

const controller = {
    index: function (req, res) {
        return res.send(Data.lista);
    },
    show: function (req, res) {
        let id = req.params.id;

        if (id > data.lista.length) {
            return res.render('results')
        } else {
            for (let i = 0; i < data.lista.length; i++) {
                if (id == data.lista[i].id) {
                    return res.render('results')            
                }
            }

        }
    }
 
}
module.exports = controller