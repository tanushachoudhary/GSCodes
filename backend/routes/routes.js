import userFunctions from "../controllers/userController.js";
import adminFunctions from "../controllers/questionController.js";
import postFunctions from "../controllers/postController.js";
/* import { authenticateToken } from "../controllers/jwtControllers.js"; */
import express from 'express';
import multer from "multer";
import mongoose from "mongoose";
import {GridFsStorage} from "multer-gridfs-storage";
import Grid from "gridfs-stream";
import { getImage, uploadImage } from "../controllers/imageController.js";


const conn = mongoose.connection;
let gfs;
conn.once("open", () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("uploads");
});

// Storage Engine for Multer + GridFS
const storage = new GridFsStorage({
  url: "mongodb://localhost:27017/communityDB",
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) return reject(err);
        const filename = buf.toString("hex") + "_" + file.originalname;
        resolve({ filename, bucketName: "uploads" });
      });
    });
  },
});
const upload = multer({ storage })

const router = express.Router({mergeParams:true});

router.post("/signup", userFunctions.signupUser);
router.post("/login", userFunctions.loginUser);
// <<<<<<< HEAD
// router.post("/addNewQuestion", adminFunctions.addNewProblem);
// router.get("/getProblems", adminFunctions.getProblems);
// router.get("/problem/:id", async (req, res) => {
//   try {
//     const problem = await QuestionModel.findById(req.params.id).populate(
//       "createdBy",
//       "StudentName"
//     );
//     if (!problem) {
//       return res.status(404).json({ message: "Problem not found" });
//     }
//     res.json(problem);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching problem" });
//   }
// });

// export default router;
// =======
router.delete("/logout", userFunctions.logoutUser);


router.post("/addNewQuestion", adminFunctions.addNewProblem);
router.get("/getProblems", adminFunctions.getProblems);
router.get("/problem/:id", adminFunctions.getThisProblem);
router.put("/edit-problem/:id", adminFunctions.updateProblem);
router.delete("/deleteProblem/:id", adminFunctions.deleteProblem);


router.get("/api/posts", postFunctions.getPosts);
router.post("/api/posts", postFunctions.createPost);
router.put("/api/posts/update/:id", postFunctions.updatePost);
router.delete("/api/posts/:id", postFunctions.deletePost);
export default router;
