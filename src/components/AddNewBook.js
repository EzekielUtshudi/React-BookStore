import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBook } from '../redux/Books/books';

const AddNewBook = () => {
  const [inputValues, setInputValues] = useState({
    title: '',
    author: '',
    id: '',
    category: '',
  });
  const dispatch = useDispatch();
  const [errorMsg, setError] = useState('');

  const submitBookToStore = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const { title, author, category } = inputValues;
    const newBook = {
      id,
      title,
      author,
      category,
    };

    if (newBook.title.trim().length === 0) {
      setError('Please add Book title to submit...');
      setInputValues(newBook);
    } else if (newBook.category === '') {
      setError('Please select Book Category to submit...');
      setInputValues(newBook);
    } else {
      setError('');
      dispatch(postBook(newBook));
      setInputValues({
        title: '',
        author: '',
        id: '',
        category: '',
      });
      document.querySelector('.add-book-section').reset();
    }
  };

  const onChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="hr" />
      <form className="add-book-section d_flex" onSubmit={submitBookToStore}>
        <h1>ADD NEW BOOK</h1>
        <div className="add-book d_flex">
          <input
            type="text"
            placeholder="Book title"
            name="title"
            onChange={onChange}
            required
          />
          <input
            type="text"
            placeholder="Author"
            name="author"
            onChange={onChange}
            required
          />
          <select name="category" onChange={onChange} required>
            <option value="" hidden>Category</option>
            <option value="Romance">Romance</option>
            <option value="Documentary">Documentary</option>
            <option value="Fiction">Fiction</option>
            <option value="Crime">Crime</option>
          </select>
          <button type="submit" onClick={submitBookToStore}>Add Book</button>
        </div>
        <small>{errorMsg}</small>
      </form>
    </>
  );
};

export default AddNewBook;
