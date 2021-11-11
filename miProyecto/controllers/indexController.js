const db = require('../database/models'); //relaciona controlador con modelos
const Op = db.Sequelize.Op;

const data = require('../data/usuarios');
const posts = require('../data/posteos');

const indexController = {
    
    index: (req, res) => { 
        db.Post.findAll({
            include: [{
                association: 'usuarios'
            }, {
                association: 'comentarios'
            }],
            

            }).then(postsViejos => {
                res.render('index', {
                    postsViejos: postsViejos
                });
            })
        

    }
}

module.exports = indexController