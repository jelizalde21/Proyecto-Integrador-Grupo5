const db = require('../database/models'); //relaciona controlador con modelos
const Op = db.Sequelize.Op;


const controller = {
    index: function (req, res) {
        return res.send(Data.lista);
    },
    show: function (req, res) {
       db.Post.findAll({
           where:{
               caption: {
                   [ Op.like]: "%"+req.query.search+"%"
               }
           },
           limit: 10,
           order: [
               ['fecha', 'DESC'],
           ]
       })
       .then(posts => {
        return res.render('results', {posts: posts})  
       })         
            

        }
 
};

module.exports = controller