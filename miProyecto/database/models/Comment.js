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
        }
    },
        
    {
    tableName: "comments",
    });

    Comment.associate = function(models){
        Comment.belongsTo(models.User, {
            as: "comentarios",
            foreignKey: "comment_user_id"
        })
    } 
    
return Comment

}