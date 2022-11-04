const express = require("express");
const mongoose = require("mongoose");

const app = express();

// MongoDB Connection
mongoose.connect("mongodb://localhost/item_input", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// Routes
app.use(require("./routes/index"));
app.use(require("./routes/item"));

// Server Configs
app.listen(3000, () => console.log("Server started listening on port: 3000."))
