import React from "react";
import { connect } from "react-redux";
import { setFilter } from "../reducers/filterReducer";

const FilterAnecdote = (props) => {
  const handleChage = (e) => {
    e.preventDefault();
    const filterAnec = e.target.value;
    props.setFilter(filterAnec);
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

const mapStateToProps = () => {
  //return { filter: state.filter };
  return {};
};

const mapDispatchToProps = {
  setFilter,
};

const ConnectedFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterAnecdote);
export default ConnectedFilter;
