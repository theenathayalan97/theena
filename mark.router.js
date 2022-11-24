"use strict";

const router = require("express").Router();
const markDetail = require("./10thSchema");

// create studends mark in mongodb
router.post("/createMark",async(req,res)=>{
    try {
        console.log(req.body)
        const studendsMark = new markDetail(req.body)
        const result = await studendsMark.save();

        res.status(200).json({"status":"success","message":"Create mark successfully","result": studendsMark})
    } catch (error) {
        res.status(500).json({"status":"failure","message":"something we wrong ","result":error.message})
    }
})

// get all studends mark
router.get("/getStudentMark",async(req,res)=>{
    try {
        const result = await markDetail.find();
        res.status(200).json({"status":"success","message":"Create mark successfully","result": result})
    } catch (error) {
        res.status(500).json({"status":"failure","message":"something we wrong ","result":error.message})
    }
})

// perticuler data recive
router.get("/reciveData",async(req,res)=>{
    // console.log("855")
    try {
        console.log(req.query.reg_no)
        const condition = {"reg_no":req.query.reg_no}
        const result =await markDetail.findOne(condition) 
        if(!result){
            res.status(404).json({"status": "failure", message: "no mark details available for this student!"})   
        }
        res.status(200).json({"status":"success","message":"Create mark successfully","result": result})
        console.log(result)
    } catch (error) {
        console.log("500")
        res.status(500).json({"status":"failure","message":"something we wrong ","result":error.message})
    }
})

// Update the mark
router.put("/updateTheMark/:roll_no", async(req, res)=>{
    try {
        let condition = {reg_no: req.params.reg_no}
        let updatedData = req.body
        let option = {new: true}
        let result = await markDetail.findOneAndUpdate(condition, updatedData, option)

        res.status(200).json({"status": "suceess", message: "Mark detals updated successfully!", "result": result})
    } catch (error) {
        res.status(500).json({"status": "failure", "message": error.message })
    }
});

// delete method:
router.delete("/deleteMarkDetails", async(req, res)=>{
    try {
        console.log(req.body)
        await markDetail.findOneAndDelete(req.body)
        res.status(200).json({"status": "suceess", message: "Mark details deleted successfully!"})
    } catch (error) {
        res.status(500).json({"status": "failure", "message": error.message })
    }
})

module.exports = router; 