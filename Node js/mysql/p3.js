var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbemp'
});

con.connect(function(err){
    if(err) throw err;
    console.log('Connection Successfully estabilished');
    con.query(
        'CREATE TABLE company (id int(10) AUTO_INCREMENT, name VARCHAR(200), empid int(10), PRIMARY KEY(id))',
        function(err,result){
            if(err) throw err;
            console.log('Table created...');
        } 
    );
});