const { Library } = require("../models");

const libraries = async () => {
  const libraries = await Library.find({});

  return libraries;
};

module.exports = libraries;
