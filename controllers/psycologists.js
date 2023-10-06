import { request, response } from "express";
import  Psycologist from "../models/psycologists.js";
import { httpStatusMesage } from "../constants/httpStatusMessage.js"

/**
 * 
 * @param {Express.Request} request 
 * @param {Express.Response} response 
 */

export const getAllPsycologists = async (request, response) => {
    try {
        const psycologist = await Psycologist.findAll(); 
        response.status(200).json(psycologist); 
    } catch (error) {
        response.status(500).json({
            message: "internal server error",
        });
    }
};

/**
 * 
 * @param {Express.Request} request 
 * @param {Express.Response} response 
 */

export const getPsycologistsById = async (request, response) => {
    try {
        const psycologists = await Psycologist.findOne({
            where: {
                id: request.params.id
            }
        }); 
        
        if (!psycologists) {
            response.status(404).json({
                message: 'User not found'
            });
            return;
        }
         response.status(200).json(psycologists);
    } catch (error) {
        response.status(500).json({
            message: "internal server error",
        });
    }
};
