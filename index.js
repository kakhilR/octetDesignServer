import cors from 'cors';
import express from 'express';
import { databaseConnection } from './models/connection.js';
import { jobDataRoutes } from './routes/jobData.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

await databaseConnection();

app.use('/api',jobDataRoutes)

app.listen(8000,()=>{
    console.log("listening on port 8000")
})

