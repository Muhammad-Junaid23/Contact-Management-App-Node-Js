const express = require('express');
const { mongoose } = require('mongoose');
const connectDb = require('./config/dbConnection')
const contactRoutes = require('./routes/contactRoutes');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorHandler');
require('dotenv').config()

connectDb();
const app = express()
app.use(express.json())
app.use(errorHandler)

app.get('/',(req,res)=>{
    res.send("Welcome to contact manager app")
})

app.use('/api/contact', contactRoutes)
app.use('/api/users', userRoutes)

const port = process.env.PORT;
app.listen(port,()=>{
    console.log("Server running at Port :",port);
})
