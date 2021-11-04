module.exports = (sequelize, dataTypes) => {
    const User = sequelize.define('User', {

        users_id: {
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
        contraseña: {
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
            as: "usuarios",
            foreignKey: "user_post_id"
        })

    },
    User.associate = function(models){

        User.hasMany(models.Comment, {
            as: "usuarioss",
            foreignKey: "comment_user_id"
        })

    },
    User.associate = function(models){

        User.belongsToMany(models.User, {
            as: "posteoss",
            through: "Comment",
            foreignKey: "comment_post_id",
            anotherKey: "comment_user_id"
        })

    }
    
    return User
};

