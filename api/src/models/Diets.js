const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('diets', {
        id:{
            primaryKey: true,
            type: DataTypes.UUID,
            allowNull: false,
            unique: true,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
};