var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.status(200).send("Welcome to coder school");
});

// BOOK route
const bookRouter = require("./book.api");
router.use("/books", bookRouter);

module.exports = router;
