const { DataTypes }= require('sequelize')
const { sequelize } = require('../Config/db')

const Product = sequelize.define('Product',{
     p_id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    description:{
        type:DataTypes.TEXT,
    },
    price:{
        type:DataTypes.FLOAT,
        allowNull:false,
    },
    stock:{
        type:DataTypes.INTEGER,
        default:0
    }
},{
    tableName:'Product',
    timestamps:true,
    paranoid:true,
})

module.exports = Product