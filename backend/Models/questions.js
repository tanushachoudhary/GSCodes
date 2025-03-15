import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    questionId: {
        type: String,
        required: true,
        unique: true,
    },
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
        testCaseId: {type: String, required: true,},
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