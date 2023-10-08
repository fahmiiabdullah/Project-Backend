import { request, response } from "express";
import Users from "../models/users.js";

/**
 * 
 * @param {Express.Request} request 
 * @param {Express.Response} response 
 * @returns 
 */


export const Login = async (req, res) =>{
    const user = await Users.findOne({
        where: {
            password: req.body.password,
            email: req.body.email
        }
    });
    if(!user) return res.status(404).json({messge: "User Not Found"});
    req.session.userId = user.email;
    const id = user.id;
    const username = user.username;
    const email = user.email;
    res.status(200).json({id, username, email,});
}

