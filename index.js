var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'juzimi'
});

connection.connect();

var writersList = ['张爱玲', '鲁迅', '三毛', '徐志摩'];

for(var i in writersList) {
  var writersSql = 'insert into writers(name) value("' + writersList[i] + '")'
  console.log('hello', writersSql)
  connection.query(writersSql, function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
  });
}

connection.end();
