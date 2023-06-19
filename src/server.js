require("dotenv").config();
import express from "express";
import viewEngine from "./config/viewEngine";
import initWebRoute from "./routes/web";
import bodyParser from "body-parser";
import cors from "cors";

let app = express();

const corsOptions = {
   //origin: 'http://localhost:3000',
   origin : "https://messenger-chat-bot-nodejs-mast.herokuapp.com/",
   credentials: true,
 };
 app.use(cors(corsOptions));

// config view engine
viewEngine(app);

//use body-parser to post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// init all web routes
initWebRoute(app);

let port = process.env.PORT || 8080;

app.listen(port, ()=>{
   console.log(`App is running at the port ${port}`) ;
});