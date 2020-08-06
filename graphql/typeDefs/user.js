const { gql } = require("apollo-server-express");

module.exports = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    email: String!
    createdAt: String!
    updatedAt: String!
  }

  type Auth {
    token: String!
  }

  input RegisterInput {
    name: String!
    email: String!
    username: String!
    password: String!
  }

  extend type Query {
    profile: User!
    user: [User!]!
    refreshToken: Auth!
    login(username: String!, password: String!): Auth!
  }

  extend type Mutation {
    register(input: RegisterInput): Auth!
  }
`;
