import { Router } from "express";
import { createMessage } from "../controllers/message.js";

const messageRouter = Router();

messageRouter.post("/message", createMessage);

export default messageRouter;