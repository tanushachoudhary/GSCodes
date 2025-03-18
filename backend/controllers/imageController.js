const url = "http://localhost:8000";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const conn = mongoose.createConnection(process.env.MONGO_URL);

let gfs;
conn.once("open", () => {
  gfs = new mongoose.mongo.GridFSBucket(conn.db, { bucketName: "photos" });
});


export const uploadImg = (req,res) =>{
  console.log("upload File recieved");
    //we first check if we are getting a file in request 
    if (!req.file) {
        console.log("No file has been received");
        return res.status(400).json({ message: " No file uploaded" });
      }
    
      console.log("File has been uploaded successfully", req.file);
      const imageurl = `${url}/file/${req.file.filename}`;

    res.status(200).json(imageurl);
}

