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
    
return Comment

}