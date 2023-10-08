import { Router } from "express";
import { 
    getAllPsycologists, 
    getPsycologistsById,
     
} from "../controllers/psycologists.js";
import { verifyUser } from "../middleware/auth.js";

const psycologistRouter = Router();

psycologistRouter.get("/psycologists",verifyUser, getAllPsycologists);
psycologistRouter.get("/psycologists/:id", getPsycologistsById);

export default psycologistRouter;