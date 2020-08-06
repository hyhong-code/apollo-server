const User = require("../../models/User");

module.exports = {
  Query: {
    profile: () => {},
    user: () => {},
    refreshToken: () => {},
    login: () => {},
  },
  Mutation: {
    register: async (root, { input }, { req }, info) => {
      try {
        const user = await User.create(input);
        return { token: user.genJwtToken() };
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  },
};
