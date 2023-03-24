const express = require("express");
const Router = require("./Router/router");
const app = express();

app.use(express.json());
app.use("/",Router);

module.exports = app;