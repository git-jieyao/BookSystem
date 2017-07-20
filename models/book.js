const mongoose=require('mongoose');
const db=require('./db.js');

//创建Schema
const bookSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    type:{
        type:String,
        required:false  //可以为空
    }
})
//定义bookSchema的静态方法--查找所有图书
bookSchema.statics.searchAllBook=function (callback) {
    this.model('book').find({},callback)
}
//定义bookSchema的静态方法--根据id查找某本图书
bookSchema.statics.searchBookByID=function (id,callback) {
    this.model('book').find({"_id":id},callback)
}
//用bookSchema创建一个model，book映射到数据库是books
const bookModel=db.model("book",bookSchema);
module.exports=bookModel;




