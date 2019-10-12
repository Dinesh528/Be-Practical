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

    var sql = "SELECT * FROM company RIGHT JOIN emp ON emp.name = company.name ";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Data = ", result);
    });
});