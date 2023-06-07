const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "please add your email"]
    },
    email: {
        type: String,
        required: [true, "please add the contact email address"],
        unique: [true, "Email address already taken"],
    },
    password: {
        type: String,
        required: [true, "please add your vaild password"]

    },
},
    {
        timestamps: true
    }
);

module.exports=mongoose.model("User",userSchema);
