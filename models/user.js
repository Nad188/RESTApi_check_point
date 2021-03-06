const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number },
});

const User = mongoose.model("user", user);
module.exports = User;
