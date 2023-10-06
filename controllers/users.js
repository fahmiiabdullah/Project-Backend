import express from "express";
import  User from "../models/users.js";
import { httpStatusMesage } from "../constants/httpStatusMessage.js";

/**
 * 
 * @param {express.Request} request 
 * @param {express.Response} response 
 */

export const createUsers = async(request, response) => {
    const { username, password, email } = request.body;
    try {
        await User.create({
            username: username,
            password: password,
            email: email
        });
        response.status(201).json({
            message: "Register Successful"
        });
    } catch (error) {
        response.status(400).json({
            message: "Bad Request"
        });
    }
};

/**
 * 
 * @param {express.Request} request 
 * @param {express.Response} response 
 */

export const getAllUsers = async (request, response) => {
    try {
        const users = await User.findAll({
            attributes: ['id', 'username', 'email']
        }); 
        response.status(200).json(users); 
    } catch (error) {
        response.status(500).json({
            message: httpStatusMesage[response.statusCode]
        });
    }
};


/**
 * 
 * @param {express.Request} request 
 * @param {express.Response} response 
 */

export const getUsersById = async (request, response) => {
    try {
        const user = await User.findOne({
            attributes: ['id', 'username', 'email'],
            where: {
                id: request.params.id
            },
        }); 
        
        if (!user) {
            response.status(404).json({
                message: 'User not found'
            });
            return;
        }
         response.status(200).json(user);
    } catch (error) {
        response.status(500).json({
            message: httpStatusMesage[response.statusCode]
        });
    }
};
