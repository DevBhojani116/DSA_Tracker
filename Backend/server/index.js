import express from 'express';
import mongoose from 'mongoose';

import { PORT, dbURL } from './config.js';
import bodyParser from 'body-parser';

const app = express();
app.use(express.json());
app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));

app.listen(PORT, ()=>
{
    console.log("Server running on PORT: " + PORT);
});

mongoose.connect(dbURL)
.then(()=>
{
    console.log("Database connected successfully");
})
.catch((err)=>
{
    console.log("Couldn't connect to database: " + err);
})
