const app = require("./src/app")
const mongoose = require("mongoose")



mongoose.connect("mongodb+srv://royal:hqhDzgvSGyx54J8P@cluster0.2jusscx.mongodb.net/day-6/practice")
.then(()=>{
    console.log("Connected to database");
    
})
app.listen(3000,()=>{
    console.log("server is running port no 3000");
    
})