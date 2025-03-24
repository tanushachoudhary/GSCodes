import mongoose from "mongoose";

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
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now, // Automatically set to the current date
    }
});

// Correct way to define a model
const Post = mongoose.model("Post", postSchema);

export default Post;
