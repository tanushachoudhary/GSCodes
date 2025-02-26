import  signupUser  from "../controllers/userController.js";
import express from 'express';

const router = express.Router();

router.post("/signup", signupUser);

export default router;