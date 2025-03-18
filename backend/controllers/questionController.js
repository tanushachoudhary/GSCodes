//post problem for admin
//get problem details to render for everyone
//update problem for admin
//delete problem for admin 
import QuestionModel from '../Models/questions.js';

const addNewProblem = async (req,res) =>{
    try {
        console.log("Incoming request body:", req.body); // 

        let {questionDesc, questionTitle, questionDifficulty, tags, testCases, createdBy } = req.body;

        if (!questionTitle || !questionDesc) {
            return res.status(400).json({ msg: "Missing required fields" }); 
        }

        const newQuestion = new QuestionModel({ questionDesc, questionTitle, questionDifficulty, tags, testCases, createdBy});
        console.log("ABout to be saved", newQuestion);
        let savedQuestion = await newQuestion.save();
        console.log("Saved question:", savedQuestion); 

        return res.status(201).json({ data: savedQuestion, msg: "New question has been added" });
    } catch (err) {
        console.error("Error while adding question:", err);
        return res.status(500).json({ msg: "Internal Server Error" });
    }
}

const getProblems = async (req,res) => {
    try{
        let problems = await QuestionModel.find();
        return res.status(200).json(problems);
    }catch(err){
        console.log("Error while fetching all problems", err);
        return res.status(500).json({msg: "Internal Server Error"});
    }
}

const updateProblem = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        let updatedProblem = await QuestionModel.findByIdAndUpdate(id, updatedData, { new: true });

        if (!updatedProblem) {
            return res.status(404).json({ msg: "Problem not found" });
        }

        return res.status(200).json({ data: updatedProblem, msg: "Problem updated successfully" });
    } catch (err) {
        console.error("Error while updating problem:", err);
        return res.status(500).json({ msg: "Internal Server Error" });
    }
};

// Delete a problem (Admin Only)
const deleteProblem = async (req, res) => {
    try {
        const { id } = req.params;

        let deletedProblem = await QuestionModel.findByIdAndDelete(id);

        if (!deletedProblem) {
            return res.status(404).json({ msg: "Problem not found" });
        }

        return res.status(200).json({ msg: "Problem deleted successfully" });
    } catch (err) {
        console.error("Error while deleting problem:", err);
        return res.status(500).json({ msg: "Internal Server Error" });
    }
};


export default {addNewProblem, getProblems, updateProblem, deleteProblem};