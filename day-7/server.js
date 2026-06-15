/**
 * ye file server ko on krta hai 
 * mongodb se connect kr krta hai 
 * 
 */

require("dotenv").config()
const app = require("./src/app")

const connectToDb = require("./src/config/database")


connectToDb();

app.listen(3000,()=>{
    console.log("server is running on 3000 port");
    
})