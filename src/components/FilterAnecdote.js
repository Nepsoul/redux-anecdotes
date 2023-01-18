import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../reducers/filterReducer";

const FilterAnecdote = () => {
  const dispatch = useDispatch();

  const handleChage = (e) => {
    e.preventDefault();
    const filterAnec = e.target.value;
    dispatch(setFilter(filterAnec));
  };

  const style = {
    marginBotton: 10,
  };
  return (
    <div style={style}>
      filter
      <input onChange={handleChage} />
    </div>
  );
};

export default FilterAnecdote;
