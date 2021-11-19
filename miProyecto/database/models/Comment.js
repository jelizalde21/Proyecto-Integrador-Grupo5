module.exports = (sequelize, dataTypes) => {
    const Comment = sequelize.define('Comment', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        comentario: {
            type: dataTypes.STRING
        },
        fecha: {
            type: dataTypes.DATE
        },
        comment_user_id: {
            type: dataTypes.INTEGER
        },
        comment_post_id: {
            type: dataTypes.INTEGER
        }, 
        createdAt: {
            type: dataTypes.DATE,
            field: "created_at"
        },
        updatedAt: {
            type: dataTypes.DATE,
            field: "updated_at"
        }
    },
        
    {
    tableName: "comments",
    timestamps: true,
    });

    Comment.associate = function(models){
        Comment.belongsTo(models.User, {
            as: "comentarios1",
            foreignKey: "comment_user_id"
        });
        Comment.belongsTo(models.Post, {
            as: "comentarios2",
            foreignKey: "comment_post_id"
        });
    }
    
return Comment

}