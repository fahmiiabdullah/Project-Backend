import { Router } from "express";
import { 
    getAllUsers, 
    getUsersById, 
    createUsers 
} from "../controllers/users.js"
// import { verifyUser } from "../middleware/auth.js";

const userRouter = Router();

userRouter.get("/users", getAllUsers);
userRouter.get("/users/:id", getUsersById);
userRouter.post("/users", createUsers);

export default userRouter;