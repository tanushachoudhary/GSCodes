import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from "./routes/routes.js";
import Connection from './Database/db.js';
const PORT = 8000;
const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use('/', router);

app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`);
})

Connection();
