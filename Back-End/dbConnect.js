const mysql = require('mysql');
const details = require(/*dbconfig.js*/);
const connection = mysql.createConnection({/*ENTER DETAILS*/})


module.exports(connection)