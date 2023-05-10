const sql = require("../dbutils/dbConnect.js");

// constructor
const Films = function(film) {
  this.film_title = film.film_title;
  this.film_year = film.film_year;
  this.film_rating = film.film_rating;
  this.film_genre = film.film_genre;
  this.film_secondary_genre = film.film_secondary_genre;
  this.film_poster = film.film_poster;
};

Films.create = (newFilm, result) => {
  sql.query("INSERT INTO films SET ?", newFilm, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created film: ", { id: res.insertId, ...newFilm });
    result(null, { id: res.insertId, ...newFilm });
  });
};

Films.getAll = (title, result) => {
  let query = "SELECT * FROM films";

  if (title) {
    query += ` WHERE film_title LIKE '%${title}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("films: ", res);
    result(null, res);
  });
};

Films.findById = (id, result) => {
  sql.query(`SELECT * FROM films WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found film: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Film with the id
    result({ kind: "not_found" }, null);
  });
};

Films.updateById = (id, film, result) => {
  sql.query(
    "UPDATE films SET film_title = ?, film_year = ?, film_rating = ?, film_genre = ?, film_secondary_genre = ?, film_poster = ? WHERE id = ?",
    [film.film_title, film.film_year, film.film_rating, film.film_genre, film.film_secondary_genre, film.film_poster, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Film with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated film: ", { id: id, ...film });
      result(null, { id: id, ...film });
    }
  );
};

Films.remove = (id, result) => {
  sql.query("DELETE FROM films WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Film with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted film with id: ", id);
    result(null, res);
  });
};

module.exports = Films;
