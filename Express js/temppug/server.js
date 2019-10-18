var express = require('express');
var mongodb = require('mongodb');
var bodyParser = require('body-parser');
const assert = require('assert');

var app= express();

const url ="mongodb://localhost:27017";

const dbname ="DBuser";

mongodb.connect(url,function(err,client){
    assert.equal(null,err);
    console.log('data base connected');
    database = client.db(dbname);
});

app.set('view engine','pug');
app.set('views','./views');

var person = [
    {
        name: 'Ramesh Kumar',
        email: 'ramesh@gmail.com',
        mobile: '9493037792'
    },
    {
        name:'Dinesh Kumar',
        email: 'dinesh@gmail.com',
        mobile: '9490260714'
    }
];

app.get('/',function(req,res){
    res.render('index.pug',{ users: person });
});

app.get('/about_us',function(req,res){
    database
        .collection('userinfo')
        .find()
        .toArray(function(err,results){
            res.render('about.pug',{ userInfo: results });
        });
});

app.listen(1222,()=>{
    console.log('Server is running in http://localhost:1222');
});