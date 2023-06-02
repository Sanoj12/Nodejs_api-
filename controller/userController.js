const asyncHandler = require("express-async-handler");

// register user
//route POST /register
//@acces public



const registerUser = asyncHandler(async(req, res) => {
    const Contacts=await contact.find();
    //console.log(req.body)
    res.status(200).json(Contacts)
});

//login user
//router post /login

const loginUser= asyncHandler((req,res)=>{
    
    res.json({message:"login user"});
});

//current user
//ROUTE GET /current
//access private-cuurent user info
const currentUser= asyncHandler((req,res)=>{
    res.json({message:"current user info"});
});

module.exports={
    registerUser,
    loginUser,
    currentUser
};