import  userFunctions  from "../controllers/userController.js";
import express from 'express';

const router = express.Router();

router.post("/signup", userFunctions.signupUser);
router.post("/login", userFunctions.loginUser);

export default router;