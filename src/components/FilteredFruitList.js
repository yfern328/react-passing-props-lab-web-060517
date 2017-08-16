import React from 'react';

const FilteredFruitList = (props) => {

  FilteredFruitList.defaultProps = {
    fruit: [],
    filter: [],
    list: []
  }

  // console.log('LIST IS:', props.list);
  return (
    <ul className="fruit-list">
      {props.list.map((item, index) => <li key={index}>{item.char}</li>)}
    </ul>
  );
}

export default FilteredFruitList;
