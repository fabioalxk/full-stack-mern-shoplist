const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const path = require("path");

const app = express();
app.use(express.json());

const db = config.get("mongoURI");

mongoose
  .connect(db, {
    useCreateIndex: true,
    useNewUrlParser: true
  })
  .then(() => console.log("MongoDB has connected"))
  .catch(err => console.log(err));

app.use("/api/items", require("./routes/api/items"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));

// Server our static assets if we are in production
if (process.env.NODE_ENV === "production") {
  // set a static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
