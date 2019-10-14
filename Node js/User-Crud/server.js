const express = require('express');
const bodyParser = require('body-parser');
const mongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const cors = require('cors');

//creating ref for express
const app = express();

//db credentials
const db_url ='mongodb://localhost:27017';
const db_name ="DB-NODE";

//collection handler
var database;

//setting of default template engine
app.set('view engine','ejs');

// create ref to accept the objects from url and to bind object into html page
app.use(bodyParser.urlencoded({
    extended: true
}));

//cors handler
app.use(cors());
app.options('*',cors());

//mongodb connection handler
mongoClient.connect(db_url,function(err,response){
    assert.equal(null,err);
    console.log("Successfully connected to Mongodb");
    database = response.db(db_name)
});

//for '// default path rendering index.ejs
app.get('/',(req,res)=>{
    database.collection('userinfo').find().toArray(function(err,data){
        if(err) console.log(err);
        console.log(data);
        res.render('index.ejs',{users:data});
    });
});

app.get('/newuser',(req,res)=>{
    res.render('newuser.ejs');
});

//to post new user data to server
app.post('/createuser',(req,res)=>{
    database.collection('userinfo').save(req.body,function(err,response){
        if(err) console.log(err);
        console.log('New User successfully created..');
        res.redirect('/');
    });
});

app.get('/update/:name',(req,res)=>{
    database.collection('userinfo').find({'name': req.params.name}).toArray(function(err,data){
        if(err) console.log(err);
        console.log("Successfully Updated the user info..");
        res.render('edituser.ejs',{userData:data});
    });
});

//edit user info data in server
app.get('/updatenow/:name',(req,res)=>{
    database.collection('userinfo').updateOne({'name':req.params.name},{$set: req.body},(req,data)=>{
        if(err) console.log(err);
        console.log("Successfully Updated the user info..");
        res.redirect('/');
    });
});

// starting server
app.listen(1245,()=>{
    console.log("Server is running in http://localhost:1245");
});