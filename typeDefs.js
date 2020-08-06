const { gql } = require("apollo-server-express");

module.exports = gql`
  type Cat {
    id: ID!
    name: String!
  }

  type Query {
    hello: String!
    listCats: [Cat!]!
  }

  type Mutation {
    createCat(name: String!): Cat!
  }
`;
