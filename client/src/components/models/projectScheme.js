const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const projectSchema = new Schema({
  heroImage: String,
  heroDescription: String,
  image2: String,
  description2: String,
  image3: String,
  description3: String,
  image4: String,
  image5: String,
  image6: String,
  image7: String,
});

module.exports = mongoose.model("Projects", projectSchema);
