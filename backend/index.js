<<<<<<< HEAD
import express from 'express';

const app = express();
const PORT = 8000;

app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`);
})
=======
import Express from 'express';
import Connection from './Database/db.js';
const PORT = 8000;
const app = Express();

app.listen(()=>{
    console.log(`Server is listening on port ${PORT}`);
})

Connection();
>>>>>>> main
