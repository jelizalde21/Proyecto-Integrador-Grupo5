module.exports = (sequelize, dataTypes) => {
    const User = sequelize.define('User', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombre: {
            type: dataTypes.STRING
        },
        apellido: {
            type: dataTypes.STRING
        },
        username: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        passwords: {
            type: dataTypes.STRING
        },
        picture: {
            type: dataTypes.STRING
        },
        fecha: {
            type: dataTypes.DATE
        },
        nro_posts: {
            type: dataTypes.INTEGER
        }
    },

    {
        tableName: "users",
        timestamps: false,
    });
    
    User.associate = function(models){

        User.hasMany(models.Post, {
            as: "posteosU",
            foreignKey: "user_post_id"
        });

        User.hasMany(models.Comment, {
            as: "comentariosU",
            foreignKey: "comment_user_id"
        });

    }
    
    return User
};

