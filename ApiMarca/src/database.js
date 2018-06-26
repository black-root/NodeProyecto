const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: '172.25.0.28',
  user: 'root',
  password: 'root',
  database: 'mantenimiento',
  multipleStatements: true
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('db is connected');
  }
});

module.exports = mysqlConnection;