/*

-server create krna 
-server ko config krna 




*/


const express = require('express')
const app = express() //server create ho jata hai 

const notes = []

app.use(express.json())

/* 
POST - api ka method hai post 
notes - api ka name hai notes
*/

app.post("/notes",(req,res)=>{
    console.log(req.body)
    notes.push(req.body)
    console.log(notes);
    
    res.send("note created")
    
})


/* 
get - api ka method hai get 
notes - api ka name hai notes
*/
app.get("/notes",(req,res)=>{
    res.send(notes)
})



/* 
delete - api ka method hai delete 
notes - api ka name hai notes


// 
// params - api ke url me variable pass krna


*/

/* 
delete/ notes/index
*/
app.delete("/notes/:index",(req,res)=>{
    // console.log(req.params.index);
    delete notes[req.params.index]
    res.send("note deleted sucessfully")
})



/* 
patch/ notes/index

req.body={description :-"sample modified description"}
*/

app.patch("/notes/:index",(req,res)=>{
    
    
    notes[req.params.index].descreption = req.body.descreption
    res.send("Noted Updated Successfully")
})


app.get("/",(req,res)=>{
    res.send("Hello shrey")
})


module.exports = app
 //server ko export krna