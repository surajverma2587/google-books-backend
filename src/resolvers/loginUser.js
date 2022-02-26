const { AuthenticationError } = require("apollo-server");

const { User } = require("../models");
const { signToken } = require("../utils/auth");

const loginUser = async (_, { user }) => {
  const userFromDB = await User.findOne({ email: user.email });

  if (!userFromDB) {
    console.log("[ERROR]: Failed to login | User does not exist");
    throw new AuthenticationError("Failed to login");
  }

  const isValidPassword = await userFromDB.checkPassword(user.password);

  if (!isValidPassword) {
    console.log("[ERROR]: Failed to login | Incorrect password");
    throw new AuthenticationError("Failed to login");
  }

  return {
    token: signToken(userFromDB),
    user: userFromDB,
  };
};

module.exports = loginUser;
