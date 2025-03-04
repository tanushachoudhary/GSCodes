import Express from 'express';
import Connection from './Database/db.js';
const PORT = 8000;
const app = Express();

app.listen(()=>{
    console.log(`Server is listening on port ${PORT}`);
})

Connection();
