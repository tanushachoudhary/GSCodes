import mongoose, { mongo } from "mongoose";

const postSchema = new mongoose.Schema({
    postId: {
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
    createdAt:{
        type: Date,

    }
});

const Posts = new mongoose.Model("Post", postSchema);

export default Posts;