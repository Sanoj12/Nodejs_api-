const asyncHandler=require('express-async-handler');
const jwt=require('jsonwebtoken');


const vaildateToken =asyncHandler(async(req,res,next)=>{
   let tokens;
   let authHeader=req.headers.Authorization ||  req.headers.authorization;
   if(authHeader && authHeader.startsWith("Bearer")){
     tokens=authHeader.split(" ")[1];
     jwt.verify(tokens,process.env.ACCESS_TOKEN_SECRET, (err,decoded)=>{
              if(err){
                res.status(400);
                throw new Error("user is not authorized")
              }
              req.user=decoded.user;
              next();
              //console.log(decoded)
     });
     
   }
})
module.exports=vaildateToken;

