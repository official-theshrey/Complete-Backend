/*
1.server ko start krna 

2. database se connect krna  

*/

const app = require("./src/app")

const mongoose = require("mongoose")

function connectToDb(){
    mongoose.connect("mongodb+srv://shrey:NVf5W5jmVGFjmza5@cluster0.fiewadi.mongodb.net/day-6")
    .then(()=>{
        console.log("Connected to database");
        
    })
}


connectToDb()
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
    
})