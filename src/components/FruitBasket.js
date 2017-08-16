import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => {

  FruitBasket.defaultProps = {
    fruit: [],
    filters: [],
    list: [],
    currentFilter: null,
    updateFilterCallback: null
  }

  return (
    <div className="fruit-basket">
      <Filter filters={props.filters} currentFilter={props.currentFilter} handleChange={props.handleChange}/>
      <FilteredFruitList fruit={props.fruit} currentFilter={props.currentFilter} list={props.list}/>
    </div>
  );
}

export default FruitBasket;
