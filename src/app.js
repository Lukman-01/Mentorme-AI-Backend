const express = require("express");
const bodyParser = express.json;
const cors = require("cors");
require("./config/db");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(bodyParser());
app.use("/api/v1", routes);


module.exports = app;

