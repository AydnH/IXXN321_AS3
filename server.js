const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const port = process.env.PORT || 3100;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`live on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("API LIVE");
});
