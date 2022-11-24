"use strict"

const express = require("express");
const app = express();
require('dotenv').config();
const port = process.env.PORT || 8000;
const mongoose = require("mongoose");
const markrouter = require("./mark.router")

// mongodb connect
mongoose.connect("mongodb://localhost:27017/final").then(()=>{
    console.log("mongodb connect succesfully")
}).catch((err)=>{
    console.log(err)
})

// health test
app.post("/healthtest",async(req,res)=>{
    try {
        res.status(200),json({"status":"success","message":"healthtest is running!"})
    } catch (err) {
        // console.log(err)
        res.status(400),json({"status":"failure","message":"something is wrong!"})
    }

})

app.use(express.json())
app.use("/api/v1/mark/",markrouter)


app.listen(port,(err)=>{
    if(!err){
        console.log(`Listen port http://localhost:${port}`)
    }
})