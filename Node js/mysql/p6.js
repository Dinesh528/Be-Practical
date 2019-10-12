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

    var sql= 'INSERT INTO company(name,empid,salary) VALUES?';
    var values = [
        ['Dinesh','1211','35000'],
        ['Ananth','1222','30000'],
        ['Chandu','1233', '30000']
    ];

    con.query(sql, [values], function(err,result){
        if(err) throw err;
        console.log('Successfully inserted the values...' + result.affectedRows);
    });
});