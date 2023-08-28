import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const jobDataSchema = new Schema({
    name:{type:String, required:true},
    location:{type:String, required:true},
    posted:{type:String, required:true},
    status:{type:String, required:true},
    applied:{type:Number},
    jobViews:{type:String},
    daysLeft:{type:Number, required:true},
    premium:{type:Boolean, default:false},
    dateFormat:{type:String, required:true},
},{timestamps:true});


export const  JobDataModel = mongoose.model('jobData',jobDataSchema)