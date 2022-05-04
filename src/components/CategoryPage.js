import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/Categories/categories';

const CategoryPage = () => {
  const Category = useSelector((state) => state.categoryReducer);
  const dispatch = useDispatch();
  const handleClick = () => dispatch(checkStatus());
  return (
    <div>
      <button onClick={handleClick} type="button"> Check status</button>
      <h1>{Category}</h1>
    </div>
  );
};

export default CategoryPage;
