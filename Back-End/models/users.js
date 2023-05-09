const sql = require("../dbutils/dbConnect.js");

// constructor
const Users = function(user) {
  this.user_name = user.user_name;
  this.user_fname = user.user_fname;
  this.user_pass = user.user_pass;
};

Users.create = (newUser, result) => {
    sql.query("INSERT INTO users SET ?", newUser, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created user: ", { id: res.insertId, ...newUser });
      result(null, { id: res.insertId, ...newUser });
    });
  };

Users.getAll = (name, result) => {
    let query = "SELECT * FROM users";
  
    if (name) {
      query += ` WHERE name LIKE '%${name}%'`;
    }
  
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("users: ", res);
      result(null, res);
    });
  };

  module.exports = Users;