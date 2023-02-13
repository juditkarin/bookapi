var mongoose = require("mongoose");

var BokSchema = new mongoose.Schema(
  {
    title: String,
    author: Array,
    date_published: String,
    category: String,
    read: Boolean,
    date: Array,
    rating: Number,
  },
  {
    collection: "book",
  }
);

module.exports = mongoose.model("bokModel", BokSchema);
