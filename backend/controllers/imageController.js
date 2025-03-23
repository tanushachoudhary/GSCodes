const url = "http://localhost:8000";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const conn = mongoose.createConnection(process.env.MONGO_URL);

let gfs;
conn.once("open", () => {
  gfs = new mongoose.mongo.GridFSBucket(conn.db, { bucketName: "photos" });
});


export const uploadImage = (req,res) =>{
  if(!req.file){
      return res.status(404).json({msg: "file not found"});
  }

  const imageUrl = `${url}/file/${req.file.filename}`;

  return res.status(200).json(imageUrl);
}

export const getImage = async(req, res) =>{
  try{
      const file = await gfs.files.findOne({filename: req.params.filename});
      const readStream = gridfsBucket.openDownloadStream(file._id);
      readStream.pipe(res);
  }catch(err){
      return res.status(500).json({msg:err.message});
  }
}

