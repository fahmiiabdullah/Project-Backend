import Message from "../models/message.js";
import { httpStatusMesage } from "../constants/httpStatusMessage.js";

/**
 * 
 * @param {Express.Request} request 
 * @param {Express.Response} response 
 * @returns 
 */


export const createMessage = async(request, response) => {
    const { email, message } = request.body;
    try {
        await Message.create({
            email: email,
            message: message
        });
        response.status(201).json({
            message: "Successful"
        });
    } catch (error) {
        response.status(400).json({
            message: httpStatusMesage[response.statusCode]
        });
    }
};