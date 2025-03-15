import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    commentId: {
        type: String,
        required: true,
    },
    content: {
        type:String,
        required: true,
    },
    respectivePost : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    createdAt: {
        type: Date,
    }
});

const Comments = new mongoose.model("Comment", commentSchema);

export default Comments;