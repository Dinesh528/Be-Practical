var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbemp'
});

con.connect(function(err){
    if(err) throw err;
    console.log('Connection successfully estabilished');
    con.query('ALTER TABLE company ADD COLUMN salary INT(10)',function(err,result){
        if(err) throw err;
        console.log('Table successfully altered..');
    });
});