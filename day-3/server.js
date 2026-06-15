const express = require('express')
const app = express()

app.use(express.json())//json data ko parse krne ke liye middleware use krna pdta hai 

const notes = [];

app.post('/notes',(req,res)=>{
    console.log(req.body);

    notes.push(req.body)//client se aaya hua data ko array me push krna
    
    res.send("notes created!!")
});

app.get("/notes",(req,res)=>{
    res.send(notes)//client ko notes array send krna
})

app.listen(3000,()=>{
    console.log("server is running on port no. 3000");
    
});



// const express = require('express')
// const app = express()//server instance create karna 
// app.get('/',(req,res)=>{
//     res.send('hello world')//client ko response send krna
// })
// app.listen(3000)//server start krta 