import cors from 'cors';
import dotEnv from 'dotenv';
import express from 'express';
import { databaseConnection } from './models/connection.js';
import { jobDataRoutes } from './routes/jobData.js';

dotEnv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

await databaseConnection();

app.get('/hi',(req,res)=>{
    res.send("hello")
})

app.use('/api',jobDataRoutes)

app.listen(process.env.PORT,()=>{
    console.log("listening on port 8000")
})

