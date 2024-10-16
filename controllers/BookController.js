const { Book, User, Borrowing } = require("../models/Model");
const BookController = {
  getAllBooks: async (req, res) => {
    try {
      const books = await Book.find({});
      res.json(books);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  createBook: async (req, res) => {
    const books = req.body;
    const newBook = new Book(books);
    try {
      const savedBook = await newBook.save();
      res.status(201).json(savedBook);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};
module.exports = BookController;
