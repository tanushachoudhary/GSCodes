import User from "../Models/user.js";
import  bcrypt, {hash} from 'bcryptjs';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import token from "../Models/token.js";

dotenv.config();

const signupUser = async(req, res) =>{
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = {StudentUsername: req.body.enrollmentNo, StudentName: req.body.name, StudentEmail: req.body.email, Password: hashedPassword, Batch: req.body.passingYear, currentYear: req.body.studyingYear};
        if(!user.StudentUsername || !user.StudentName || !user.StudentEmail || !user.Password || !user.Batch || !user.currentYear || !user.currentYear){
            return res.status(400).json({msg: "all fields are required"});
        }
        console.log(user);
    }catch(error){
        console.log(error);
        return res.status(500).json({msg: 'Error while signing up. Try again'});
    }
}

export default signupUser;