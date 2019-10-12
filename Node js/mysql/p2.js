var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});

con.connect(function(err){
    if(err) throw err;
    console.log('Connection Sucessfully estabilshed');
    con.query('CREATE DATABASE dbemp',function(err,result){
        if(err) throw err;
        console.log('Database created..');
    });
});