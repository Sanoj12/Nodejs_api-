const mongoose=require("mongoose");

const connects=async ()=>{
    try {
        const connectdb=await mongoose.connect(process.env.CONNECTION);
        console.log("Database "+ connectdb.connection.name +" connected");
    } catch (err) {
        console.log(err);
        
    }
};

module.exports=connects;