const asyncHandler = require('express-async-handler')
const { JsonWebTokenError } = require('jsonwebtoken')
const jwt = require('jsonwebtoken')


const validateToken = asyncHandler(async(req,res,next)=>{
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if(authHeader && authHeader.startsWith('Bearer')){
        let token = authHeader.split(" ")[1];
        jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,decoded)=>{
            if(err){
             res.status(401);
             throw new Error('User is not authorized')
            }
            req.user = decoded.user;
            next();
        })
        if(!token){
            res.status(401);
            throw new Error("user is not authorized or token expired or missing");
        }
    }
})

module.exports = validateToken;