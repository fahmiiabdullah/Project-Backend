import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";


const Message = sequelize.define("message",{
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            isEmail: true
        }
    },
    message : { 
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    
});

export default Message;
