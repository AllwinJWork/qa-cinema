const Users = require("../models/users.js");

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Users
    const user = new Users({
      user_name: req.body.name,
      user_fname: req.body.fname
    });
  
    // Save Tutorial in the database
    Users.create(user, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User."
        });
      else res.send(data);
    });
  };


exports.findAll = (req, res) => {
    const name = req.query.name;
  
    Users.getAll(name, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving users."
        });
      else res.send(data);
    });
  };