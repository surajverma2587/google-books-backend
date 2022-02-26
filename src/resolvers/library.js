const { AuthenticationError } = require("apollo-server");
const { Library } = require("../models");

const library = async (_, { libraryId }, context) => {
  try {
    if (!context.user) {
      throw new AuthenticationError(
        "You are not authorised to perform this operation"
      );
    }

    const library = await Library.findById(libraryId);

    return library;
  } catch (error) {
    console.log(`[ERROR]: Failed to get library | ${error.message}`);
  }
};

module.exports = library;
