const express=require('express');
const app=express();
const router=require('./router/router.js');

app.listen(3000,'127.0.0.2');
app.set('view engine','ejs');
app.get('/',router.showindex);
app.get('/addbook',router.addbook);
app.get('/doadd',router.doadd);
app.get('/editBook',router.editPage);
app.get('/doedit/:id',router.doedit);











