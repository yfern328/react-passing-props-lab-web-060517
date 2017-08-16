import React from 'react';

const Filter = (props) => {

  Filter.defaultProps = {
    filters: [],
    handleChange: null
  }

  return (
    <select onChange={props.handleChange} defaultValue='All'>
      <option value='all'>All</option>
      {props.filters.map(filter =>
        <option key={filter} value={filter}> {filter} </option>
      )}
    </select>
  );

}

export default Filter;
