const Cat = require("./models/Cat");

module.exports = {
  Query: {
    hello: () => "Hi!",
    listCats: async () => {
      try {
        const cats = await Cat.find({});
        return cats;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  },
  Mutation: {
    createCat: async (parent, { name }) => {
      try {
        const cat = await Cat.create({ name });
        return cat;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  },
};
