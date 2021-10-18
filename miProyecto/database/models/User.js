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
        contraseña: {
            type: dataTypes.STRING
        },
        picture: {
            type: dataTypes.STRING
        },
        fecha: {
            type: dataTypes.DATE
        },
        numero: {
            type: dataTypes.INTEGER
        }
    },

    {
        tableName: "users",
    });
    
    return User
};

