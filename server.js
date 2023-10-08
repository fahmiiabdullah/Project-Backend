import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import sequelize from "./config/sequelize.js";
import { startSequelize } from "./utils/startSequelize.js";
import userRouter from "./routes/users.js";
import psycologistRouter from "./routes/psycologists.js";
import authRouter from "./routes/auth.js";
import messageRouter from "./routes/message.js";


dotenv.config();

const app = express();
const port = process.env.PORT;



app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: "auto"
    }
}))

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));


app.use(bodyParser.urlencoded());
app.use(bodyParser.raw());
app.use(bodyParser.json());

app.use(express.static("public"));
app.use("/karen-data", express.static("public/karen.html"));
app.use("/putri-data", express.static("public/putri.html"));
app.use("/angel-data", express.static("public/angel.html"));
app.use("/joana-data", express.static("public/joana.html"));
app.use("/kemal-data", express.static("public/kemal.html"));
app.use("/naura-data", express.static("public/naura.html"));

startSequelize(sequelize);

app.use(express.json());
app.use(userRouter);
app.use(psycologistRouter);
app.use(authRouter);
app.use(messageRouter);


app.listen(port, () => {
    console.log(`server is running at port ${port}`);
});