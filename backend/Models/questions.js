import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const questionSchema = new mongoose.Schema({
    questionDesc: {
        type: String,
        required: true,
    },
    questionTitle: {
        type:String,
        required: true,
    },
    questionDifficulty: {
        type: String,
        required: true,
    },
    tags:[
        {
            type: String,
        }
    ],
    testCases: [
       {
        testCaseId: {type: String, required: true,default: uuidv4()},
        ipData: {type: String, },
        opData: {type: String, },
       }
    ],
    createdBy :{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
});

const QuestionModel = mongoose.model("Question",questionSchema);

export default QuestionModel;