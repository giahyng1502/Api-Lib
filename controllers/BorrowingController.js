const { Borrowing, Book, User } = require("../models/Model");

const borrowingController = {
  async getAllBorrowings(req, res) {
    try {
      const borrowings = await Borrowing.find().populate("bookId");
      res.json(borrowings);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  async createBorrowing(req, res) {
    const { borrowerName, phoneNumber, bookId } = req.body;
    try {
      const newBorrowing = new Borrowing({
        infor: {
          borrowerName: borrowerName,
          phoneNumber: phoneNumber,
        },
        bookId: bookId,
      });
      newBorrowing.save();
      res.json({ msg: "Tạo phiếu mượn thành công" });
    } catch (error) {
      console.log(error);
    }
  },
};
module.exports = borrowingController;
