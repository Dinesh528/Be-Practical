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
    con.query(
        "INSERT INTO company(name,empid,salary) VALUES('Mahesh', '123','30000') ",
        function(err, result){
            if(err) throw err;
            console.log('Sucessfully insert the values...');
        }
        );
});