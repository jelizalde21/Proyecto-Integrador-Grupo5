const db = require('../database/models'); // relaciona controlador con modelos
const Op = db.Sequelize.Op;

const profileController = {
        index: (req, res) => { 
            db.User.findByPk(req.session.usuario.id,{
            
                include: [{
                    association: 'posteosU'
                }, {
                    association: 'comentariosU'
                }],
                
    
                }).then(users => {
                    
                    res.render('profile', {
                        users: users
                    });
                })
        },
    edit: function (req, res) {
        res.render ('profileEdit')
    }
};



module.exports = profileController