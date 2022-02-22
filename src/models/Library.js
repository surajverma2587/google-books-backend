const { model, Schema } = require("mongoose");

const book = require("./Book");

const librarySchema = {
  name: {
    type: String,
    required: true,
    maxLength: 200,
  },
  books: [book],
};

const schema = new Schema(librarySchema, {
  toJSON: {
    getters: true,
  },
  id: true,
});

schema.virtual("bookCount").get(function () {
  return this.books.length;
});

const Library = model("library", schema);

module.exports = Library;
