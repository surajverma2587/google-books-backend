const search = require("./search");
const libraries = require("./libraries");
const library = require("./library");
const addBookToLibrary = require("./addBookToLibrary");
const addLibrary = require("./addLibrary");

const resolvers = {
  Mutation: {
    addBookToLibrary,
    addLibrary,
  },
  Query: {
    search,
    libraries,
    library,
  },
};

module.exports = resolvers;
