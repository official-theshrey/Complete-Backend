/**
 * server ko create krna 
 */
const express = require("express")
const noteModel = require("./models/notes.model")
const app = express()

/**
 * - POST / notes
 * -req.body => {title,discription}
 */

app.use(express.json())

app.post("/notes",async(req,res)=>{
    const {title,description,age} = req.body 


    const note = await noteModel.create({
        title, description,age
    })

    res.status(201).json({
        message: "note created successfully",
        note
    })
})


/**
 * - GET/notes
 * - fetch all the notes DATA
 * 
 */

app.get("/notes",async(req,res)=>{
   const notes = await noteModel.find()

   res.status(200).json({
    message: "Notes fetched successfully",
    notes
   })
})

module.exports = app