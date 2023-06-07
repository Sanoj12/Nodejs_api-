const asyncHandler = require("express-async-handler");
const User=require("../models/userModel");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");

// register user
//route POST /register
//@acces public



const registerUser = asyncHandler(async(req, res) => {
    const {username,email,password}=req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("all fields are mandatory");
    }
     const userAvailable=await User.findOne({email});
     if(userAvailable){
        res.status(400);
        throw new Error("User already Available...")

     }
     //create hash password saltrounds=10

     const hashedPassword= await bcrypt.hash(password,10);

     //create a new user

     const user= await User.create({
        username,
        email,
        password:hashedPassword
     }); 
     //console.log(hashedPassword)
     console.log(`user create ${user}`)
     if(user){
        res.status(200).json({_id:user.id,email:user.email})
     }else{
        res.status(400);
        throw new Error("user not vaild")
     }
    res.status(200).json({message:"successfully register"})
});


//login user
//router post /login

const loginUser= asyncHandler(async(req,res)=>{
    const {email,password} =req.body;
    if(!email || !password){
        res.status(400);
        throw new Error("all fields are mandatory");
    }
    const user=await User.findOne({email});
    //compare password and hashpassword
    if(user && (await bcrypt.compare(password,user.password))){
        const accessToken = jwt.sign({
            user:{
                username:user.username,
                email:user.email,
                id:user.id,
            },
        }, process.env.ACCESS_TOKEN_SECRET,
           {expiresIn:"15m"}

        );
        console.log("success");
        res.status(200).json({ accessToken });
    }else{
        res.status(401);
        throw new Error("email or password is invaild")
    }
   // res.json({message:"login user"});
});

//current user
//ROUTE GET /current
//access private-current user info
const currentUser= asyncHandler(async(req,res)=>{


    res.json(req.user);
});

module.exports={
    registerUser,
    loginUser,
    currentUser
};