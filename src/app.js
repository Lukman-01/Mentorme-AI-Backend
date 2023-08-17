const express = require("express");
const bodyParser = express.json;
const cors = require("cors");
require("./config/db");

const app = express();

app.use(bodyParser());
app.use(cors());

module.exports = app;

