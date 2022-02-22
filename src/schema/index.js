const { gql } = require("apollo-server");

const typeDefs = gql`
  type Book {
    title: String
    authors: [String]
    pageCount: Int
    imageUrl: String
    publishDate: String
    categories: [String]
    rating: Float
    previewUrl: String
    description: String
  }

  type Library {
    id: ID
    name: String
    books: [Book]
    bookCount: Int
  }

  type Query {
    search(searchTerm: String!): [Book]
    library(libraryId: ID!): Library
    libraries: [Library]
  }
`;

module.exports = typeDefs;
