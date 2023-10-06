import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";


const Psycologists = sequelize.define("psycologists",{
    name:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:true
        }
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            isEmail: true
        }
    },
    no_praktek: { 
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    pendidikan: { 
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
});

export default Psycologists;