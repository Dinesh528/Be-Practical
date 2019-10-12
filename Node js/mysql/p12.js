var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "employee"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connection successfully established");

    var sql = "SELECT * FROM emp LEFT JOIN company ON emp.name = company.name ";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Data = ", result);
    });
});