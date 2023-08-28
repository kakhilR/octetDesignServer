import cors from 'cors';
import dotEnv from 'dotenv';
import express from 'express';
import { databaseConnection } from './models/connection.js';
import { jobDataRoutes } from './routes/jobData.js';

dotEnv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

await databaseConnection();

app.use('/api',jobDataRoutes)

app.listen(process.env.port,()=>{
    console.log("listening on port 8000")
})

