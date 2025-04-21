const express = require("express");
const cors = require("cors");
const ConnectDB = require("./db");
const studentRouter=require("./app/router/StudentRouter");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Application running");
})

app.use("/api/students",studentRouter);

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Application running on ${PORT}`);
});

ConnectDB();
