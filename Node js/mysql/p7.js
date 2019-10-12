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
    con.query("UPDATE company SET name='Ranjith' WHERE id=1", function(err,result){
        if(err) throw err;
        console.log('Successfully updated values..');
    });
});