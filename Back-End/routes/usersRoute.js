module.exports = app => {
    const users = require("../controllers/usersController.js");
  
    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", users.create);
  
    // Retrieve all Users
    router.get("/", users.findAll);
  
    app.use('/users', router);
  };