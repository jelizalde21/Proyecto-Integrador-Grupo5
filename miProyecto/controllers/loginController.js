const db = require('../database/models'); //relaciona controlador con modelos
const register = db.Register;
const op = db.Sequelize.Op;

const loginController = {
    index: function (req, res) {
        res.render ('login')
    },
    login: function(req, res){
        db.Register.create({
            title: req.body.title,
            awards: req.body.awards,
            rating: req.body.rating,
            release_date: req.body.release_date,
            genre_id: req.body.genre_id,
            length: req.body.length
        })
        .then(register => {
            res.redirect('/')
        })
        .catch(err => {
            console.log(err);
            res.send(err)
        })
    }
}

module.exports = loginController