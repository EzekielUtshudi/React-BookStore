import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { deleteBook } from '../redux/Books/books';

const BookItem = ({ book }) => {
  const {
    title, author, id, category,
  } = book;
  const dispatch = useDispatch();

  const HandleRemove = () => {
    dispatch(deleteBook(id));
  };

  const chapterVal = Math.round(Math.random() * 20);

  return (
    <li key={id} className="d_flex">
      <div className="firsCol">
        <p className="category">{category}</p>
        <p className="title">{ title }</p>
        <p className="Author" required>{ author }</p>
        <div className="firsCol-btns">
          <button type="button">Comment</button>
          <button type="button" onClick={HandleRemove}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <ul className="secondCol d_flex">
        <li>
          <div style={{ width: 100, height: 100 }}>
            <CircularProgressbar value={Math.round((chapterVal / 20) * 100)} />
          </div>
        </li>
        <li>
          <p className="percentageVal">
            {Math.round((chapterVal / 20) * 100)}
            %
          </p>
          <p className="completed">completed</p>
        </li>
        <li>
          <div className="lastCol">
            <p className="currChapter">CURRENT CHAPTER</p>
            <p id="chapter">
              Chapter
              {' '}
              {chapterVal}
            </p>
            <button type="button">UPDATE PROGRESS</button>
          </div>
        </li>
      </ul>
    </li>
  );
};

BookItem.propTypes = {
  book: PropTypes.shape(
    {
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    },
  ).isRequired,
};

export default BookItem;
