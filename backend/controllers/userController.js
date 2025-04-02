import User from "../Models/user.js";
import  bcrypt, {hash} from 'bcryptjs';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import token from "../Models/token.js";
import ExpressError from "../utils/ExpressError.js";

dotenv.config();

const signupUser = async(req, res) =>{
    console.log("api callback working");
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = {role: req.body.role, StudentUsername: req.body.enrollmentNo, StudentName: req.body.name, StudentEmail: req.body.email, Password: hashedPassword, Batch: req.body.passingYear, currentYear: req.body.studyingYear};
        if(!user.role || !user.StudentUsername || !user.StudentName || !user.StudentEmail || !user.Password || !user.Batch || !user.currentYear || !user.currentYear){
            return res.status(400).json({msg: "all fields are required"});
        }
        console.log(user);
        const newUser = new User(user);
        await newUser.save();
        return res.status(200).json({data: user, msg: 'data is being sent'});
    }catch(error){
        console.log(error);
        return res.status(500).json({msg: 'Error while signing up. Try again'});
    }
}

const loginUser = async(req,res) => {
    console.log(req.body);
    let user = await User.findOne({StudentUsername: req.body.enrollmentNo});
    console.log(user);

    if(!user){
        res.status(400).json({msg:"User not found"});
    }

    try{
        let match = await bcrypt.compare(req.body.password, user.Password);
        if(match){
            const accessToken = jwt.sign(user.toJSON(), process.env.ACCESS_SECRET_KEY, {expiresIn: '15m'});
            const refreshToken = jwt.sign(user.toJSON(), process.env.REFRESH_SECRET_KEY);
            const newToken = new token({token: refreshToken})
            await newToken.save();

            return res.status(200).json({data: user,accessToken: accessToken, refreshToken: refreshToken,msg: "user logged in successfully"});
        }else{
            res.status(400).json({msg:"password does not match"});
        }
    }catch(error){
        return res.status(500).json({msg: "Error while logging in user"});
    }
}

const logoutUser = async (req, res) => {
    try {
        const authToken = req.query.token;

        if (!authToken) {
            return res.status(400).json({ error: "Token is required" });
        }

        const tokenParts = authToken.split(' ');
        const tokenValue = tokenParts.length > 1 ? tokenParts[1] : tokenParts[0];

        const existingToken = await token.findOne({ token: tokenValue });
        if (!existingToken) {
            return res.status(400).json({ error: "Invalid token" });
        }

        await token.findOneAndDelete({ token: tokenValue });

        return res.status(200).json({ msg: "User logged out successfully" });
    } catch (error) {
        console.error("Logout error:", error);
        return res.status(500).json({ error: "Error while logging out user" });
    }
};


export default {signupUser, loginUser, logoutUser};