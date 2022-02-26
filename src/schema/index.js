const { gql } = require("apollo-server");

const typeDefs = gql`
  type Book {
    id: ID
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

  input BookInput {
    id: ID
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

  input LibraryInput {
    name: String!
  }

  type Mutation {
    addBookToLibrary(book: BookInput!, libraryId: ID!): Library
    addLibrary(library: LibraryInput!): Library
  }
`;

module.exports = typeDefs;
