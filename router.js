const express = require("express");
const router = express.Router();
const pool = require("./db-config");

//connect to db
pool.connect((err, res) => {
  console.log(err);
  console.log("connected");
});

//route untuk mendapatkan response berupa data actor dari tabel actor
router.get("/", (req, res) => {
  pool.query("SELECT * FROM actor", (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
});

//route untuk mendapatkan response berupa list data category name dari tabel category
router.get("/category", (req, res) => {
  pool.query("SELECT name FROM category", (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
});

//route untuk mendapatkan response berupa list data film berdasarkan category yang kita ketik di url dari tabel category, film_category dan film
router.get("/category/:name", (req, res) => {
  pool.query(
    `select category.name , film.title, film.description from category inner join film_category on category.category_id = film_category.category_id inner join film on film_category.film_id = film.film_id where category.name ILIKE '%${req.params.name}%' order by film.title asc`,
    (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result);
    }
  );
});

//route untuk mendapatkan response berupa list data judul, deskripsi, release year, dan rating dari database pada tabel film
router.get("/film", (req, res) => {
  pool.query("SELECT title,description,release_year,rating FROM film", (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
});

//route untuk mendapatkan response berupa data film berdasarkan id yang kita request pada url dari tabel film
router.get("/film/:id", (req, res) => {
  pool.query(`SELECT * FROM film WHERE film_id = ${req.params.id}`, (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
});
module.exports = router;
