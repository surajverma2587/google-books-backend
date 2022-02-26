const { AuthenticationError } = require("apollo-server");

const { Library } = require("../models");

const libraries = async (_, __, context) => {
  if (!context.user) {
    throw new AuthenticationError(
      "You are not authorised to perform this operation"
    );
  }

  const libraries = await Library.find({});

  return libraries;
};

module.exports = libraries;
