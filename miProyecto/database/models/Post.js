module.exports = (sequelize, dataTypes) => {
    const Post = sequelize.define('Post', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        picture: {
            type: dataTypes.STRING
        },
        caption: {
            type: dataTypes.STRING
        },
        fecha: {
            type: dataTypes.DATE
        },
        user_post_id: {
            type: dataTypes.INTEGER
        }
   },
        
        {
        tableName: "posts",
        timestamps: false
        });

    
    Post.associate = (models) => {
        Post.belongsTo(models.User, { //Post pertenece a User
            as: "usuarios",
            foreignKey: "user_post_id"
        });
        Post.hasMany(models.Comment, { //Post tiene muchos Comment
            as: "comentarios",
            foreignKey: "id"
        }); 
    }  
    return Post
    
}
    