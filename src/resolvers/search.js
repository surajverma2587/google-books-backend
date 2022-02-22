const axios = require("axios");

const search = async (_, { searchTerm }) => {
  try {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURI(
      searchTerm
    )}`;

    const { data } = await axios.get(url);

    const books = data.items.map(({ volumeInfo, searchInfo }) => ({
      title: volumeInfo?.title,
      authors: volumeInfo?.authors,
      pageCount: volumeInfo?.pageCount,
      imageUrl: volumeInfo?.imageLinks?.thumbnail,
      publishDate: volumeInfo?.publishedDate,
      categories: volumeInfo?.categories,
      rating: volumeInfo?.averageRating,
      previewUrl: volumeInfo?.previewLink,
      description: searchInfo?.textSnippet,
    }));

    return books;
  } catch (error) {
    console.log(`[ERROR]: Failed to search | ${error.message}`);
  }
};

module.exports = search;
