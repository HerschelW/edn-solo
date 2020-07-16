const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
// const userStrategy = require("../strategies/user.strategy");

const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

/**
 * Get all of the resources on the table
 */
router.get("/", (req, res) => {
  console.log("getting resources");
  const queryText = `SELECT * FROM resources ORDER BY id DESC`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Error making SELECT from resources", error);
      res.sendStatus(500);
    });
});

/**
 * Add a resource for the logged in user to the table
 */
router.post("/", rejectUnauthenticated, (req, res) => {
  console.log("Adding resource to the database");

  const title = req.body.resourceTitle;
  const body = req.body.resourceBody;
  const user = req.user.id;
  const queryText = `
    INSERT INTO resources (title, body, user_id, upvote_count, report)
    VALUES ($1, $2, $3, 0, 0)`;
  pool
    .query(queryText, [title, body, user])
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
});

/**
 * Delete an posts if it's something the logged in user added
 */
router.delete("/:id", rejectUnauthenticated, (req, res) => {
  let id = req.params.id;
  let user_id = req.user.id;
  console.log(`ID from params: ${id}`);
  console.log(`user_id from req.user.id: ${user_id}`);

  let queryText = `
    DELETE FROM resources WHERE id = $1 AND user_id = $2`;
  pool
    .query(queryText, [id, user_id])
    .then(() => res.sendStatus(203))
    .catch((error) => res.send(error));
});

/**
 * Update an posts if it's something the logged in user added
 */
router.put("/:id", rejectUnauthenticated, (req, res) => {
  let title = req.body.title;
  let body = req.body.body;
  let id = req.params.id;
  let user_id = req.user.id;
  const queryText = `
    UPDATE resources SET title = $1, body = $2 WHERE id = $3 AND user_id = $4`;
  pool
    .query(queryText, [title, body, id, user_id])
    .then(() => res.sendStatus(204))
    .catch((error) => console.log(error));
});

/**
 * Return all users along with the total number of posts
 * they have added to the table
 */
// router.get("/count", (req, res) => {});

/**
 * Return a specific posts by id
 */
// router.get("/:id", (req, res) => {});

module.exports = router;