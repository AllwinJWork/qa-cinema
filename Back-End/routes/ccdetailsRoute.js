module.exports = app => {
    const ccdetails = require("../controllers/ccdetailsController.js");
  
    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", ccdetails.create);
  
    // Retrieve all Users
    router.get("/", ccdetails.findAll);

      // Retrieve a single User with id
    router.get("/:id", ccdetails.findOne);

      // Update a User with id
    router.put("/:id", ccdetails.update);

      // Delete a User with id
  router.delete("/:id", ccdetails.delete);
  
    app.use('/cc', router);
  };