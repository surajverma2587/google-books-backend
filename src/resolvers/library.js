const { Library } = require("../models");

const library = async (_, { libraryId }) => {
  try {
    const library = await Library.findById(libraryId);

    return library;
  } catch (error) {
    console.log(`[ERROR]: Failed to get library | ${error.message}`);
  }
};

module.exports = library;
