import  userFunctions  from "../controllers/userController.js";
import adminFunctions from "../controllers/questionController.js";
import { createPost, getAllPosts, getPostById, updatePost, deletePost } from "../controllers/postController.js";

/* import { authenticateToken } from "../controllers/jwtControllers.js"; */
import express from 'express';

const router = express.Router();

router.post("/signup", userFunctions.signupUser);
router.post("/login", userFunctions.loginUser);
router.post("/addNewQuestion", adminFunctions.addNewProblem);
router.post("/", createPost);
router.get("/", getAllPosts);
router.get("/:id", getPostById);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);
export default router;