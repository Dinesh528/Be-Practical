var express = require('express');
var cookieParser = require('cookie-parser');

var app =express();
app.use(cookieParser());

app.get('/', function(req,res){
    res
        .cookie('user','Ramesh',{ expire: 360000 + Date.now()})
        .send('New Cookie has created..');
        //console.log(req.signedCookies);
});

app.get("/create_course",function(req,res){
    res 
        .cookie('course','Express',{ expire: 360000 + Date.now()})
        .send('New Cookie has created');
      console.log(req.cookies.user);
      console.log(req.cookies.course);  
});

app.get('/delete_user', function(req,res){
    res.clearCookie('user');
    res.send('User cookie has deleted Successfully..');
});

app.listen(2000,function(){
    console.log('Server is running in http://localhost:2000');
});