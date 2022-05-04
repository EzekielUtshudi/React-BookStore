import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/Books/books';

const AddNewBook = () => {
  const [inputValues, setInputValues] = useState({
    booktitle: '',
    author: '',
    category: '',
  });
  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const { booktitle, author, category } = inputValues;
    const newBook = {
      booktitle,
      author,
      id,
      category,
    };
    dispatch(addBook(newBook));
  };

  const onChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="add-book-section" onSubmit={submitBookToStore}>
      <h1>ADD NEW BOOK</h1>
      <input
        type="text"
        placeholder="Book title"
        name="booktitle"
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
      <select placeholder="categories" name="category" onChange={onChange} required>
        <option>Category</option>
        <option value="Romance">Romance</option>
        <option value="Documentary">Documentary</option>
        <option value="Fiction">Fiction</option>
        <option value="Crime">Crime</option>
      </select>
      <button type="submit" onClick={submitBookToStore}>Add Book</button>
    </form>
  );
};

export default AddNewBook;
