import userFunctions from "../controllers/userController.js";
import adminFunctions from "../controllers/questionController.js";
/* import { authenticateToken } from "../controllers/jwtControllers.js"; */
import express from "express";
import QuestionModel from "../Models/questions.js";

const router = express.Router();

router.post("/signup", userFunctions.signupUser);
router.post("/login", userFunctions.loginUser);
router.post("/addNewQuestion", adminFunctions.addNewProblem);
router.get("/getProblems", adminFunctions.getProblems);
router.get("/problem/:id", async (req, res) => {
  try {
    const problem = await QuestionModel.findById(req.params.id).populate(
      "createdBy",
      "StudentName"
    );
    if (!problem) {
      return res.status(404).json({ message: "Problem not found" });
    }
    res.json(problem);
  } catch (error) {
    res.status(500).json({ message: "Error fetching problem" });
  }
});

export default router;
