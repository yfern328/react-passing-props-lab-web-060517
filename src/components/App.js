import React from 'react';
import FruitBasket from './FruitBasket';

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null,
      list: []
    }
  }

  fetchFilters = () => {
    return fetch('/api/fruit_types')
      .then(response => response.json())
      .then((filters) => {
        // console.log('Initial Filter State:',this.state.filters);
        this.setState({ filters });
        // console.log('Filter State After Fetch:', this.state.filters);
      });
  }

  fetchFruit = () => {
    return fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => {
        // console.log('Initial Fruit State:', this.state.fruit);
        this.setState({ fruit });
        // console.log('Fruit State After Fetch:', this.state.fruit);
      });
  }

  changeCurrentFilter = (event) => {
    this.setState({
      currentFilter: event.target.value
    }, () => this.changeList());
  }

  changeList = () => {
    if ((this.state.currentFilter === null) || (this.state.currentFilter === 'all')) {
      this.setState({
        list: this.state.fruit
      })
    }
    else {
      this.setState({
        list: this.state.fruit.filter(fruit => fruit.fruit_type === this.state.currentFilter)
      })
    }
  }

  componentWillMount() {
    this.fetchFruit()
    this.fetchFilters()
    .then(() => this.changeList());
  }

  render(){
    // console.log('Current Filter is:', this.state.currentFilter)
    // console.log('STATE IS:', this.state)
    return(
      <div>
        <FruitBasket fruit={this.state.fruit} filters={this.state.filters} currentFilter={this.state.currentFilter} handleChange={this.changeCurrentFilter} list={this.state.list}/>
      </div>
    );
  }
};

export default App;
