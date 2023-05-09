// const express = require("express"); // importing express

// const bodyParser = require("body-parser");
// const cors = require("cors");

// const myapp = express(); // initialising it
// myapp.use(cors());
// myapp.use(bodyParser.json()); // converts the request body from JSON (res => res.json())

// const mySQLServer = require("./dbConnect.js");

// // get routes - add all the routes here
// const movieRouter = require("./routes/moviesRoute");

// myapp.use("/movies", movieRouter);

// // myapp.use("*", (req, res, next) => next({ status: 404, message: "Invalid url" })); // catches 404's

// // myapp.use((err, req, res, next) => {
// //   res.status(err.status ? err.status : 500).send(err.message);
// // });

// mySQLServer.connect();

// const myserver = myapp.listen(5000, () =>
//   console.log("Server started on", myserver.address().port)
// );

// module.exports = myserver;

const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to test application." });
});

require("./routes/usersRoute.js")(app);
require("./routes/ccdetailsRoute.js")(app);
require("./routes/filmsRoute.js")(app);



// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
