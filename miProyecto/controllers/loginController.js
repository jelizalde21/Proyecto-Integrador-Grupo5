const db = require('../database/models'); //relaciona controlador con modelos
const register = db.Register;
const op = db.Sequelize.Op;
const bcrypt = require('bcryptjs');

const controller = {
    index: (req, res) => {
        if (!req.session.usuario) {
            res.render('login', {
                error: null
            })
        } else {
            res.redirect('/')
        }
    },
    login: (req, res) => {
        if (req.body.usuario && req.body.passwords) {
            db.User.findOne({
                    where: [{
                        username: req.body.usuario
                    }]
                })
                .then(usuario => {
                    if (usuario) {
                        if (bcrypt.compareSync(req.body.passwords, usuario.passwords)) {
                            req.session.usuario = usuario
                            if (req.body.remember) {
                                res.cookie('userId', usuario.id, {
                                    maxAge: 1000 * 60 * 5
                                });
                            }
                            res.redirect('/')
                        } else {
                            res.render('login', {
                                error: 'La contraseña es incorrecta'
                            })
                        }

                    } else {
                        res.render('login', {
                            error: 'El nombre de usuario es incorrecto'
                        })
                    }
                })
        } else {
            res.render('login', {
                error: 'Ningun campo puede estar vacio'
            })
        }


        ;
    },

    logout: function(req, res){
        req.session.destroy()
        req.clearCookie("userId")
        res.redirect("/users/login")
    }
}
module.exports = controller;