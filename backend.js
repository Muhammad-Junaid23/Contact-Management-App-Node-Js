const express = require('express');
const { default: mongoose } = require('mongoose');
require('dotenv').config()

const app = express()

app.get('/',(req,res)=>{
    res.send("Welcome to contact manager app")
})


const uri = process.env.MONGO_URI;
const port = process.env.PORT;
mongoose.connect(uri)
.then(()=>{
    console.log("Connected to MongoDb Atlas");
    app.listen(port,()=>{
        console.log("Server running at Port :",port);
    })
})
.catch((e)=>{
    console.log("Connection Failed due to : " , e);
})