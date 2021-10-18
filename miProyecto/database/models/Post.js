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
   },
        
        {
        tableName: "posts",
        });
        
    return Post
    
}
    