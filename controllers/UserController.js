const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { User } = require("../models/Model");

const userController = {
  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email: email });
      if (!user)
        return res.status(400).json({ msg: "Tài khoản không tồn tại" });
      const isMath = await bcrypt.compare(password, user.password);
      if (!isMath) {
        return res.status(400).json({ msg: "Mật khẩu không đúng" });
      }
      //   const decode = jwt.verify(token, process.env.JWT_SECRET);
      //   console.log(decode);
      res.status(200).json({ msg: "Đăng nhập thành công" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  register: async (req, res) => {
    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email: email });
      console.log(user);
      if (user) return res.status(400).json({ msg: "Tài khoản đã tồn tại" });

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      user = new User({
        name: name,
        email: email,
        password: hashedPassword,
      });
      await user.save();
      res.status(200).json(user);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  getUsers: async (req, res) => {
    try {
      const users = await User.find({});
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ msg: "lỗi sever" + err.message });
    }
  },
};

module.exports = userController;
