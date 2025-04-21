const mongoose=require("mongoose");
require("dotenv")

const ConnectDB=async ()=>{
    try {
       await mongoose.connect('mongodb://localhost:27017/MadMongo');
        console.log("Database connection successfully");
    } catch (error) {
        console.error("Database connection Error:",error);
        process.exit(1);
    }
}
module.exports=ConnectDB;