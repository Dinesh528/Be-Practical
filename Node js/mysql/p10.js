var mysql = require('mysql');
var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dbemp'
});

con.connect(function(err) {
  if (err) throw err;
  console.log('Connection successfully established');
  con.query(' SELECT name,salary FROM company WHERE id = 1', function(
    err,
    result
  ) {
    if (err) throw err;
    console.log('Data = ', result);
  });
});
