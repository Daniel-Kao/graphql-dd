const express = require("express");
const expressGraphql = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const User = require("./models/userModel");

const app = express();

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/auth", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use(
  "/graphql",
  expressGraphql({
    schema,
    graphiql: true
  })
);

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/add", async (req, res) => {
  const data = req.body;
  const user = new User({
    name: data.name,
    age: data.age
  });
  await user.save();
  res.send("ha");
});

app.listen(5000, () => {
  console.log("server running on port 5000");
});
