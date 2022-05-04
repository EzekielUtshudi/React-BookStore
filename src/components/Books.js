import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooksList } from '../redux/Books/books';
import BookItem from './BookItem';

const Books = () => {
  const dispatch = useDispatch();
  const booksList = useSelector((state) => state.booksReducer);

  useEffect(() => {
    dispatch(getBooksList());
  }, [dispatch]);

  return (
    <ul className="books-list-section">
      {booksList
        ? booksList.map((book) => (
          <BookItem key={book.id} book={book} />
        ))
        : 'Loading...'}
    </ul>
  );
};

export default Books;
