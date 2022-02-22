const search = require("./search");
const libraries = require("./libraries");
const library = require("./library");

const resolvers = {
  Query: {
    search,
    libraries,
    library,
  },
};

module.exports = resolvers;
