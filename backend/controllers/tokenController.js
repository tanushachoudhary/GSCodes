import jwt from "jsonwebtoken";
import dotenv from dotenv;

dotenv.config();

const authenticateToken = (req, res, next) =>{
    const authHeader = req.headers['authentication'];
    const token = authHeader && authHeader.split(' ')[1];

    if(token==null){
        return res.status(401).json({msg: "user not registered, token missing"})
    }

    jwt.verify(token, process.env.ACCESS_SECRET_KEY, (error, user)=>{
        if(error){
            return res.status(403).json({msg: "Invalid token"})
        }

        req.user = user;
        next();
    })
}