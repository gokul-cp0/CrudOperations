const mongoose=require("mongoose");

const studentData=new mongoose.Schema({
    name: String,
    age: Number,
    course: String,
    mark: Number
    },
    {timestamps:true}
);

const StudentModel=mongoose.model("Student",studentData);
module.exports=StudentModel;



            //import mongoose ,
            //  create schema for structure,
            // create model for connect the schema to collection 