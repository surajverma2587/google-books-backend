const { Library } = require("../models");

const addBookToLibrary = async (_, { book, libraryId }) => {
  const library = await Library.findByIdAndUpdate(
    libraryId,
    {
      $push: {
        books: book,
      },
    },
    {
      new: true,
    }
  );

  return library;
};

module.exports = addBookToLibrary;
