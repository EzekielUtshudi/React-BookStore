import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

const Books = ({ bookList }) => (
  <ul className="books-list-section">
    {bookList.map((book) => (
      <BookItem key={book.id} book={book} />
    ))}
  </ul>
);

Books.propTypes = {
  bookList: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.string.isRequired,
    },
  )).isRequired,
};

export default Books;
