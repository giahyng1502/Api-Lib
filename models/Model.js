const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  copies: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
  },
  image: {
    type: String,
  },
});
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    avatar: {
      type: String,
    },
  },
  { timestamps: true }
);
// Mô hình Phiếu Mượn (Borrowing Receipt)
const borrowingSchema = new mongoose.Schema(
  {
    infor: {
      borrowerName: {
        type: String,
        required: true, // Bắt buộc nhập tên người mượn
      },
      phoneNumber: {
        type: String,
      },
    },
    bookId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Book", // Tham chiếu đến model Book
    },
    status: {
      type: Boolean,
      default: false, // Khởi tạo giá trị mặc định là false
    },
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", bookSchema);
const User = mongoose.model("User", userSchema);
const Borrowing = mongoose.model("Borrowing", borrowingSchema);

module.exports = { Book, User, Borrowing };
