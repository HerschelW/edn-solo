const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
//const userStrategy = require("../strategies/user.strategy");

const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

/**
 * Get all of the posts on the table
 */
router.get("/", (req, res) => {
  console.log("getting posts");
  const queryText = `SELECT first_name, last_name, email, posts.id, posts.post_title, posts.post_body, posts.likes FROM users
  JOIN posts ON posts.user_id = users.id
  ORDER BY posts.id DESC`;
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

/**
 * Add an posts for the logged in user to the table
 */
router.post("/", rejectUnauthenticated, (req, res) => {
  console.log("Adding post to the database");
  console.log(req);

  const title = req.body.postTitle;
  const body = req.body.postBody;
  const user = req.user.id;
  const queryText = `
    INSERT INTO posts (post_title, post_body, user_id)
    VALUES ($1, $2, $3)`;
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
    DELETE FROM posts WHERE id = $1 AND user_id = $2`;
  pool
    .query(queryText, [id, user_id])
    .then(() => res.sendStatus(203))
    .catch((error) => res.send(error));
});

/**
 * Update an posts if it's something the logged in user added
 */
router.put("/:id", rejectUnauthenticated, (req, res) => {
  let post_title = req.body.post_title;
  let post_body = req.body.post_body;
  let id = req.params.id;
  let user_id = req.user.id;
  const queryText = `
    UPDATE posts SET post_title = $1, post_body = $2 WHERE id = $3 AND user_id = $4`;
  pool
    .query(queryText, [post_title, post_body, id, user_id])
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
