import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const jobDataStatsSchema = new Schema({
    date:{type:String},
    received:{type:Number},
    applied:{type:Number}

})

export const  JobDataStatsModel = mongoose.model('jobDataStats',jobDataStatsSchema)