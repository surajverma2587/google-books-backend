const search = require("./search");
const libraries = require("./libraries");
const library = require("./library");
const addBookToLibrary = require("./addBookToLibrary");
const addLibrary = require("./addLibrary");
const addUser = require("./addUser");
const loginUser = require("./loginUser");

const resolvers = {
  Mutation: {
    addBookToLibrary,
    addLibrary,
    addUser,
    loginUser,
  },
  Query: {
    search,
    libraries,
    library,
  },
};

module.exports = resolvers;
