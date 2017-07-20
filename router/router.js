const book=require('../models/book.js');
//渲染图书首页
module.exports.showindex=(req,res,next)=>{
    book.searchAllBook(function (err,result) {
        res.render('index',{
            'bookTotal':result
        });
    });
};
//渲染添加图书的页面
module.exports.addbook=(req,res,next)=>{
    res.render('addbook');
};
//创建图书保存到数据库
module.exports.doadd=(req,res,next)=>{
    book.create(req.query,(err)=>{
        if(err){res.send("创建失败")};
        res.send("创建成功");
    });
};
//显示修改图书的页面
module.exports.editPage=(req,res,next)=>{
    book.searchBookByID(req.query.id,(err,result)=>{
        res.render('editBook',{
            "editID":result[0].id,
            "defName":result[0].name,
            "defAuthor":result[0].author,
            "defPrice":result[0].price,
            "defType":result[0].type
        });
    })
};
//修改已经存在的指定图书
module.exports.doedit=(req,res,next)=>{
    book.update({"_id":req.params.id},{$set:{"name":req.query.name,"author":req.query.author,"price":req.query.price,"type":req.query.type}},(err,result)=>{
        if(err){res.send("修改失败")};
        res.send("修改成功");
    })
};









