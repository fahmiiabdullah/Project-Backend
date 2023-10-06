import User from "../models/users.js";
import { httpStatusMesage } from "../constants/httpStatusMessage.js";

/**
 * 
 * @param {Express.Request} reque 
 * @param {Express.Response} res 
 * @param {Express.next} next 
 * @returns 
 */

export const verifyUser = async (request, response, next) =>{
    if(!request.session.userId){
        return response.status(401).json({message: "Please log in to your account!"});
    }
    const user = await User.findOne({
        where: {
            email: request.session.userId
        }
    });
    if(!user) return response.status(404).json({
        message: httpStatusMesage[response.statusCode]
    });
    request.userId = user.id;
    next();
}