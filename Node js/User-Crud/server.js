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