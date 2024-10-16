var express = require("express");
var router = express.Router();
const BookController = require("../controllers/BookController");

/* GET home page. */
router.get("/", BookController.getAllBooks);
router.post("/", BookController.createBook);
module.exports = router;
