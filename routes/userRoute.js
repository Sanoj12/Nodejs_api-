const express=require("express");
const { registerUser, currentUser, loginUser } = require("../controller/userController");
const vaildateToken = require("../middleware/vaildateTokenHandler");
const router=express.Router();

router.post('/register',registerUser)

router.post('/login',loginUser);

router.get('/current',vaildateToken,currentUser); 


module.exports=router;