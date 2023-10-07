import { Router } from "express";
import { createMessage } from "../controllers/message.js";
import { verifyUser } from "../middleware/auth.js";

const messageRouter = Router();

messageRouter.post("/message",verifyUser, createMessage);

export default messageRouter;