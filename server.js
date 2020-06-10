const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const Projects = require("./client/src/components/models/projectScheme");
const ProfileS = require("./client/src/components/models/profileScheme");

const dbRoute = `mongodb+srv://admin:ProjectAdmin1@cluster0-ywkdy.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;
db.once("open", () => console.log("connected to the database"));
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const API_PORT = process.env.PORT || 3100;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));

app.get("/", (req, res) => {
  res.send("API LIVE");
});

//project Upload
app.get("/api/getProjects", (req, res) => {
  Projects.find((err, projects) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, projects: projects });
  });
});
app.post("/api/postProjects", async (req, res) => {
  const projects = await Projects.create(req.body);
  console.log(projects);
  return res.json({ success: true, projects: projects });
});

//profile Upload
app.get("/api/getProfile", (req, res) => {
  ProfileS.find((err, profile) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, profile: profile });
  });
});
app.post("/api/postProfile", async (req, res) => {
  const profile = await ProfileS.create(req.body);
  console.log(profile);
  return res.json({ success: true, profile: profile });
});