import mongoose from mongoose

const userSchema = mongoose.Schema({
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
    n_probs: {
        type: Number,
        default: 0,
    }
}) 

const User = mongoose.Schema('user', userSchema);
export default User;

