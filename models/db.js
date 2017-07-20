/**
 * Created by jieyao on 2017/7/15.
 */
const mongoose=require('mongoose');
mongoose.Promise = global.Promise;
const db=mongoose.createConnection('mongodb://127.0.0.1:27017/jieyao')
module.exports=db;