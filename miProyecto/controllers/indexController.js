const db = require('../database/models'); //relaciona controlador con modelos
const Op = db.Sequelize.Op;

const indexController = {
    
    index: (req, res) => { 
        db.Post.findAll({
            include: [{
                all:true,
                nested: true
            }],
            order: [
                ['usuarios', 'created_at', 'DESC'] //order indicando la relación, el campo y el criterio de ordenamiento.
            ],

            }).then(postsViejos => {
                /*res.send(postsViejos)*/
                res.render('index', {
                    postsViejos: postsViejos
                });
            })
        

    }
}

module.exports = indexController