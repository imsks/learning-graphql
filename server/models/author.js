const mongooes = require("mongoose");
const Schema = mongooes.Schema;

const AuthorSchema = new Schema({
  name: String,
  age: Number,
});

module.exports = mongooes.model("Author", AuthorSchema);
