const borrowingController = require("../controllers/BorrowingController");

const router = require("express").Router();

router.get("/", borrowingController.getAllBorrowings);

router.post("/", borrowingController.createBorrowing);
module.exports = router;
