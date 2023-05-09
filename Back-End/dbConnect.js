const mysql = require('mysql');
const dbconfig = require('./dbconfig.js');
console.log(dbconfig);
const connection = mysql.createConnection(dbconfig);
connection.connect();

connection.query('select * from cinema.films', (err, rows, fields) => {
    if (err) throw err
  
    console.log(rows);
  })

module.exports = (connection)