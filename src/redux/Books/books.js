// import axios from 'axios';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';
const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Z2vqZCN1ojOLzLMr9F63/books';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const getBooks = (payload) => ({
  type: GET_BOOKS,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);

    case GET_BOOKS:
      return action.payload;

    default:
      return state;
  }
};

export const getBooksList = () => async (dispatch) => {
  const booksList = await fetch(`${baseURL}`)
    .then((response) => response.json());
  const booksID = Object.keys(booksList);
  const formatedBooks = [];
  booksID.map((key) => formatedBooks.push({
    id: key,
    title: booksList[key][0].title,
    author: booksList[key][0].author,
    category: booksList[key][0].category,
  }));
  dispatch(getBooks(formatedBooks));
};

export const postBook = (newBook) => async (dispatch) => {
  await fetch(`${baseURL}`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: newBook.id,
      title: newBook.title,
      author: newBook.author,
      category: newBook.category,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  dispatch(addBook(newBook));
};

export const deleteBook = (id) => async (dispatch) => {
  await fetch(`${baseURL}/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  dispatch(removeBook(id));
};

export default booksReducer;
