const { Library } = require("../models");

const addLibrary = async (_, { library }) => {
  console.log(library);
  const newLibrary = await Library.create(library);

  return newLibrary;
};

module.exports = addLibrary;
