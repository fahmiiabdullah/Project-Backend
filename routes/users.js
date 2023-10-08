import { Router } from "express";
import { 
    getAllUsers, 
    getUsersById, 
    createUsers 
} from "../controllers/users.js"

const userRouter = Router();

userRouter.get("/users", getAllUsers);
userRouter.get("/users/:id", getUsersById);
userRouter.post("/users", createUsers);

export default userRouter;