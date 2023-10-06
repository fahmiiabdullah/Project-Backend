import { Sequelize } from "sequelize"

/**
 * 
 * @param {Sequelize} sequelize 
 */
export const startSequelize = async (sequelize) => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({alter: true});
        console.log("connection to database established");
    }catch(e){
        console.log("connection to database failure",e);
    }
};