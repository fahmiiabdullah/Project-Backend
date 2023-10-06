import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";


const Users = sequelize.define("users",{
    username:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:true
        }
    },
    password: { 
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            isEmail: true
        }
    }
},{
    freezeTableName:true
});

export default Users;