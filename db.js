var mysql = require('mysql');

var connection = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME
});

connection.connect(function (error) {
  if (!!error) {
    console.log('connected');
  } else {
    console.log('error');
  }
});

module.exports = connection;