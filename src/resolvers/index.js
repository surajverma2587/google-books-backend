const search = require("./search");
const libraries = require("./libraries");
const library = require("./library");
const addBookToLibrary = require("./addBookToLibrary");

const resolvers = {
  Mutation: {
    addBookToLibrary,
  },
  Query: {
    search,
    libraries,
    library,
  },
};

module.exports = resolvers;
