module.exports = app => {
    var router = require("express").Router();
    const films = require("../controllers/filmsController.js");

    // Create a new film
    router.post("/", films.create);

    // Retrieve all films
    router.get("/", films.findAll);

    // Retrieve a single film by id
    router.get("/:id", films.findOne);

    // Update a film by id
    router.put("/:id", films.update);

    // Delete a film by id
    router.delete("/:id", films.delete);

    app.use('/films',router)

}