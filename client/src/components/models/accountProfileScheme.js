const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const accountProfileSchema = new Schema({
  profilePicture: String,
  firstName: String,
  lastName: String,
  profession: String,
  biography: String,
});

module.exports = mongoose.model("accountProfile", accountProfileSchema);
