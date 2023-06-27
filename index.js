console.log("working");
import express from "express";
import morgan from "morgan";
import router from "./routes/apiRoutes.js";
import mongoose from "mongoose";

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use('/api/v1',router);


mongoose.connect('mongodb+srv://madhuri13:diebold123@cluster0.ay3ihrp.mongodb.net/cronjobDB')
.then( () => console.log("db connected"))
.catch( (err) => console.log("error",err));




app.listen(8000, () => console.log("working on port 8000"));