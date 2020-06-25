const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const accountProfileSchema = new Schema({
  name: String,
  email: String,
  profession: String,
  biography: String,
});

module.exports = mongoose.model("accountProfile", accountProfileSchema);
