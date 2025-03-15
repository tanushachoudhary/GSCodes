import  userFunctions  from "../controllers/userController.js";
import adminFunctions from "../controllers/questionController.js";
/* import { authenticateToken } from "../controllers/jwtControllers.js"; */
import express from 'express';

const router = express.Router();

router.post("/signup", userFunctions.signupUser);
router.post("/login", userFunctions.loginUser);
router.post("/addNewQuestion", adminFunctions.addNewProblem);

export default router;