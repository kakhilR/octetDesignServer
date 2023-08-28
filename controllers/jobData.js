import { JobDataModel } from '../models/jobData.js';
import { JobDataStatsModel } from '../models/jobDataStats.js';


export const addJobData = async (req, res) =>{
    const {name,location,posted,status,applied,jobViews,daysLeft, premium, dateFormat} = req.body;
    try{
        const findJobData = await JobDataModel.findOne({name:name});
        if(findJobData){
            return  res.send("job details exists");
        }
        const jobData = new JobDataModel({name,location,posted,status,applied,jobViews,daysLeft, premium, dateFormat})
        await jobData.save();
        return res.status(200).send({message:"job created successfully"});
    }catch(err){
        console.log(err,"Error")
        return res.status(500).send({message:"some thing went worng"})
    }
}


export const jobStats = async (req,res)=>{
    const { date, received, applied} = req.body;
    try{
        const findJobData = await JobDataStatsModel.findOne({date:date})
        if(findJobData){
            return  res.send(" job stat exits")
        }
        const job = new JobDataStatsModel({date, received, applied});
        await job.save();
        return res.status(200).send({message: "added job stat"});
    }catch(err){
        console.log(err,"Error")
        return res.status(500).send({message:"some thing went worng"})
    }
}

export const getJobData = async (req, res) => {
    try{
        const jobs = await JobDataModel.find({});
        return res.send({jobs: jobs});
    }catch(err){
        console.log(err,"Error")
        return res.status(500).send({message:"some thing went worng"})
    }
}

export const getJobDatastats = async(req, res) =>{
    try{
        const jobStats = await JobDataStatsModel.find({});
        return res.send({jobStats: jobStats});
    }catch(err){
        console.log(err,"Error")
        return res.status(500).send({message:"some thing went worng"})
    }
}
