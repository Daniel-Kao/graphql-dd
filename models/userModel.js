const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String
  },
  age: {
    type: Number
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
