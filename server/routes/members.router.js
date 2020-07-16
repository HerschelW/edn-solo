const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

// Ajax request for all users (first name, last name, and id)
router.get("/", (req, res) => {
  console.log("getting users");
  const queryText = `SELECT id, first_name, last_name FROM users ORDER BY first_name`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Error making SELECT from posts", error);
      res.sendStatus(500);
    });
});

module.exports = router;
