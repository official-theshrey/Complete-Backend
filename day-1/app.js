const express = require("express");
const app = express()//server create kr chuke ho ,,app k ander server k instent aa gaya hai 

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})//app.listen() method se server ko start krte hai aur port number dete hai jaha pe server run hoga
