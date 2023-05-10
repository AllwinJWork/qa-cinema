module.exports = app => {
    const tickets = require("../controllers/ticketsController.js");
  
    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", tickets.create);
  
    // Retrieve all Users
    router.get("/", tickets.findAll);

      // Retrieve a single User with id
    router.get("/:id", tickets.findOne);

      // Update a User with id
    router.put("/:id", tickets.update);

      // Delete a User with id
  router.delete("/:id", tickets.delete);
  
    app.use('/tickets', router);
  };