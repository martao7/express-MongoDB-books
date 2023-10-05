import Book from '../models/Book.js';

export const getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    if (!books.length) {
      //   throw new Error();
      //   throw { message: 'book not found' };
      throw { statusCode: 404, message: 'book not found' };
    }
    res.json(books);
  } catch (error) {
    next(error);
  }
};