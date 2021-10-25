const db = require('../database/models'); //relaciona controlador con modelos
const register = db.Register
const Op = db.Sequelize.Op;
const bcrypt = require('bcryptjs');

const registerController = {
    index: function (req, res) {
        res.render ('register')
    },
    createUser: (req, res) => {
        if (req.body.nombre && req.body.apellido && req.body.email && req.body.fecha && req.body.usuario && req.body.contraseña) {
            if (req.body.contraseña.length >= 4) {
                if (req.body.contraseña == req.body.confirContra) {
                    if (req.file) {
                        let passEncriptada = bcrypt.hashSync(req.body.contraseña);
                        db.User.findOne({
                                where: {
                                    username: req.body.usuario
                                }
                            })
                            .then(resultado => {
                                if (!resultado) {
                                    db.User.create({
                                        nombre: req.body.nombre,
                                        apellido: req.body.apellido,
                                        username: req.body.username,
                                        email: req.body.email,
                                        contraseña: passEncriptada,
                                        picture: req.file.picture,
                                        fecha: req.body.fecha,
                                        
                                    }).then(user => {
                                        req.session.usuario = user

                                        res.cookie('userId', user.id, {
                                            maxAge: 1000 * 60 * 5
                                        });

                                        res.redirect('/');
                                    });
                                } else {
                                    res.render('register', {
                                        error: 'Ya existe este nombre de usuario'
                                    })
                                }
                            })

                    } else {

                        let passEncriptada = bcrypt.hashSync(req.body.contraseña);
                        db.User.findOne({
                                where: {
                                    username: req.body.usuario
                                }
                            })
                            .then(resultado => {
                                if (!resultado) {
                                    db.User.create({
                                        name: req.body.nombre,
                                        last_name: req.body.apellido,
                                        email: req.body.email,
                                        nacimiento: req.body.fecha,
                                        username: req.body.usuario,
                                        cover: 'fotodefault.jpeg',
                                        password: passEncriptada,
                                    }).then(user => {
                                        req.session.usuario = user
                                        res.cookie('userId', user.id, {
                                            maxAge: 1000 * 60 * 5
                                        });

                                        res.redirect('/');
                                    });
                                } else {
                                    res.render('register', {
                                        error: 'Ya existe este nombre de usuario'
                                    })
                                }
                            })
                    }
                } else {
                    res.render('register', {
                        error: 'Las contraseñas no coinciden'
                    })
                }
            } else {
                res.render('register', {
                    error: 'La contraseña tiene que tener mas de tres caracteres'
                })
            }
        } else {
            res.render('register', {
                error: 'No puede haber campos vacios'
            })
        }
    }
   /* create: function(req, res){
            db.Register.create({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                fecha: req.body.fecha,
                portada: req.body.portada,
                usuario: req.body.usuario,
                contraseña: req.body.contraseña
            })
            .then(register => {
                res.redirect('/')
            })
            .catch(err => {
                console.log(err);
                res.send(err)
            })
    }*/
}

module.exports = registerController