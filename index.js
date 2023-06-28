console.log("working");
import express from "express";
import morgan from "morgan";
import router from "./routes/apiRoutes.js";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import path from 'path';

const app = express();
dotenv.config();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))

const __dirname = path.resolve();

// const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use('/api/v1',router);


// mongoose.connect('mongodb+srv://madhuri13:diebold123@cluster0.ay3ihrp.mongodb.net/cronjobDB')
// .then( () => console.log("db connected"))
// .catch( (err) => console.log("error",err));


// app.listen(8000, () => console.log("working on port 8000"));



app.get("/ping", (req, res) => {
    return res.sendFile(__dirname + '/public/index.html');
})


app.get("/urlencoded", (req, res) => {
    res.send(
        `<form method='post' action='/login'>
            <input name="email" placeholder="text" />
            <input name="password"  placeholder="password"/>
            <input type='submit' value="LOgin"/>
        </form>`
    )
})

app.post('/login', (req, res) => {
    console.log(req.body.email)
    console.log(req.body.password)
    // db store 
    res.send(`Your email ${req.body.email} and passsword is ${req.body.password}`)
})





mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("DB connected"))
    .catch((err) => console.log("DB Error => ", err));


app.listen(process.env.PORT, () => console.log("Working on port 8000")); // port