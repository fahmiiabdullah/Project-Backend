import { Router } from "express";
import { Login, Me } from "../controllers/auth.js";

const authRouter = Router();

authRouter.get("/me", Me);
authRouter.post("/login", Login);

export default authRouter;