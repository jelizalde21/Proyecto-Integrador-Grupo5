const db = require('../database/models'); // relaciona controlador con modelos
const Op = db.Sequelize.Op;
const bcrypt = require('bcryptjs');


const profileController = {
        index: (req, res) => { 
            db.User.findByPk(req.session.usuario.id,{
            
                include: [{
                    association: 'posteosU'
                }, {
                    association: 'comentariosU'
                }],
                order: [
                    ['posteosU', 'created_at' , 'DESC']
                ]
                
    
                }).then(users => {
                    
                    res.render('profile', {
                        users: users
                    });
                })
        },
    edit: function (req, res) {
        if(req.session.usuario){
            db.User.findByPk(req.params.id)
            .then(user =>{
                res.render('profileEdit', {user: user})
            })
        }else{
            return res.redirect('/')
        }
        
    },

    editUser: (req, res) => {
        let passEncriptada = bcrypt.hashSync(req.body.passwords, 10);
        let dateUpdated = new Date();
        db.User.update({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            fecha: req.body.fecha,
            username: req.body.usuario,
            picture: req.file.filename,
            passwords: passEncriptada,
            updatedAt: dateUpdated
        },
        {
            where: {id: req.params.id}
        })
        .then(profile =>{
            /*res.send(profile)*/ 
            res.redirect('/profile')
        })
        
        .catch(err => {
            console.log(err)
            res.send(err)
        })
        
    }
};



module.exports = profileController