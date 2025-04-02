import {GridFsStorage} from 'multer-gridfs-storage'; 
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import multer from 'multer';

dotenv.config();

//we make an object of class GrifFsStorage
//GridFs Storage allows us to store large files, by breaking it down into smaller chunks and into 2 parts
// fs.chunks -> actual binary file data into smaller chunks fs.file -> metadata regarding the file
// *Used to store large files that can't be stored in BSON format*
const storage = new GridFsStorage({
    url: process.env.MONGO_URL,
    file: (req, file) => {
        console.log(" Debug: Processing file", file.originalname);
        return new Promise((resolve, reject) => {
          resolve({
            filename: Date.now() + "-" + file.originalname,
            bucketName: "uploads",
          });
        });
      },
})

console.log("in upload.js");

export default multer({storage});