const { AuthenticationError } = require("apollo-server");
const { Library } = require("../models");

const addLibrary = async (_, { library }, context) => {
  try {
    if (!context.user) {
      throw new AuthenticationError(
        "You are not authorised to perform this operation"
      );
    }

    const newLibrary = await Library.create(library);

    return newLibrary;
  } catch (error) {
    console.log(`[ERROR]: Failed to add library | ${error.message}`);
  }
};

module.exports = addLibrary;
