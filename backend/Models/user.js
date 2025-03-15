import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    StudentUsername: {
        type: String,
        required: true
    },
    StudentName :{
        type:String,
        required: true
    },
    StudentEmail:{
        type: String,
        required: true
    },
    Password:{
        type: String,
        required: true
    },
    Batch:{
        type: String,
        required: true
    },
    currentYear:{
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["Admin", "Student"],
        required: true,
    },
    n_probs: {
        type: Number,
        default: 0,
    },
    questionsSolved: [
        {
            questionId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Question",
            },
        }
    ],

}) 

const User = mongoose.model('User', userSchema);
export default User;

