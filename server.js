const express=require('express');
const errorHandler = require("./middleware/errorhandler");
const connects=require('./config/db')
const dotenv= require("dotenv").config();
const app=express();


connects();
const port=process.env.PORT || 4000;

//middleware
app.use(express.json());
app.use("/",require("./routes/contactRoute")); 
app.use("/",require("./routes/userRoute"));
app.use(errorHandler);

//middleware

app.listen(port,()=>{
    console.log(`Server running on ${port}`);
})
