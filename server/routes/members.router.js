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
      console.log("Error making SELECT from membersRouter 16", error);
      res.sendStatus(500);
    });
});

router.get("/:id", (req, res) => {
  console.log("getting users");
  const queryText = `SELECT id, first_name, last_name FROM users WHERE id = 1`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Error making SELECT from membersRouter 16", error);
      res.sendStatus(500);
    });
});

// router.get("/:id", (req, res) => {
//   console.log("getting post author", req.params);
//   const userID = req.params.id;
//   const queryText = `SELECT first_name, last_name FROM users WHERE id = $1`;
//   pool
//     .query(queryText, [userID])
//     .then((result) => {
//       res.send(result.rows);
//     })
//     .catch((error) => {
//       console.log("Error making SELECT in membersRouter 31", error);
//       res.sendStatus(500);
//     });
// });

module.exports = router;
