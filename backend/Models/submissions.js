import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema({
    submissionId: {
        type: String,
        required: true,
    },
    code:{
        type: String,
        required: true,
    },
    language:{
        type: String,
        enum: ["C++", "Java", "Python"],
        default: "C++",
    },
    status:{
        type: String,
    },
    exec_time: {
        type:String,
    },
    mem_usage: {
        type: String,
    },
    createdAt: {
        type: Date,
    }
});

const Submissions = new mongoose.Model("Submission", submissionSchema);

export default Submissions;