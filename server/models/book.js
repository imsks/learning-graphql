const mongooes = require("mongoose");
const Schema = mongooes.Schema;

const BookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String,
});

module.exports = mongooes.model("Book", BookSchema);
