"use strict"

const mongoose = require("mongoose");
const studends = new mongoose.Schema({
    "name":{type:String,required:true,trim:true},
    "reg_no":{type:String,required:true,trim:true,unique:true},
    "tamil":{type:String,required:false,trim:true},
    "english":{type:String,required:false,trim:true},
    "maths":{type:String,required:false,trim:true},
    "science":{type:String,required:false,trim:true},
    "social":{type:String,required:false,trim:true}
    
})

module.exports=mongoose.model("mark",studends,"mark");