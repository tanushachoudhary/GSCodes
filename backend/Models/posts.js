import mongoose, { mongo } from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    user:{
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
    }
});

const Posts = mongoose.model("Post", postSchema);

export default Posts;