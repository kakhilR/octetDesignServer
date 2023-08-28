import express from 'express';
import { addJobData, getJobData, getJobDatastats, jobStats } from '../controllers/jobData.js';

const routes = express.Router();

// Todo: can make this a s protected routes by adding authorization of admin scope
routes.post("/add-job",addJobData);
routes.post("/add-job-stats",jobStats)
routes.get('/jobs',getJobData);
routes.get('/stats',getJobDatastats)


export const jobDataRoutes = routes;