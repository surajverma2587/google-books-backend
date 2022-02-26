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

  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
  }

  type Auth {
    token: ID!
    user: User!
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

  input AddUserInput {
    name: String!
    email: String!
    password: String!
  }

  input LoginUserInput {
    email: String!
    password: String!
  }

  type Mutation {
    addBookToLibrary(book: BookInput!, libraryId: ID!): Library
    addLibrary(library: LibraryInput!): Library
    addUser(user: AddUserInput!): Auth
    loginUser(user: LoginUserInput!): Auth
  }
`;

module.exports = typeDefs;
