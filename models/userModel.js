const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "A name must be provided"]
  },
  age: {
    type: Number,
    default: 20
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
