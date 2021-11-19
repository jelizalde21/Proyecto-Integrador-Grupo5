const db = require('../database/models'); //relaciona controlador con modelos
const Op = db.Sequelize.Op;


const controller = {
    index: function (req, res) {
        return res.send(Data.lista);
    },
    show: function (req, res) {
        db.Post.findAll({
                where: {
                    caption: {
                        [Op.like]: "%" + req.query.search + "%"
                    }
                },
                include: [{
                    all: true,
                }],
                limit: 10,
                order: [
                    ['fecha', 'DESC'],
                ]
            })
            .then(posts => {
                if (posts.length > 0) {
                    return res.render('results', {
                        posts: posts,
                        resultado: 'Resultados de busqueda ' + req.query.search
                    })

                } else {
                    return res.render('results', {
                        posts: posts,
                        resultado: 'No existen resultados para ese criterio de busqueda'
                    })
                }

            })


    },

    showUser: function (req, res) {
        db.User.findAll({
                where: {
                    username: {
                        [Op.like]: "%" + req.query.search + "%"
                    }
                },
                include: [{
                    all: true,
                }],
                
            })
            .then(users => {
                if (users.length > 0) {
                    return res.render('resultsUser', {
                        users: users,
                        resultado: 'Resultados de busqueda ' + req.query.search
                    })

                } else {
                    return res.render('resultsUser', {
                        users: users,
                        resultado: 'No existen resultados para ese criterio de busqueda'
                    })
                }

            })


    }

};


module.exports = controller