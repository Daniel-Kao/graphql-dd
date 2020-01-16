const express = require("express");
const expressGraphql = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

const app = express();

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

app.listen(3000, () => {
  console.log("server running on port 3000");
});
