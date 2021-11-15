const db = require('../database/models'); //relaciona controlador con modelos
const Op = db.Sequelize.Op;

const indexController = {
    
    index: (req, res) => { 
        db.Post.findAll({
            include: [{
                all:true,
                nested: true
            }],

            }).then(postsViejos => {
            
                res.render('index', {
                    postsViejos: postsViejos
                });
            })
        

    }
}

module.exports = indexController