// External lib
const express = require("express");
const cors = require("cors");

// Routes
const root = require("./alive");

const app = express();
app.use(cors());

app.use("/", root);

module.exports = app;
