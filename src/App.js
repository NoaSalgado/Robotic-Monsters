import { Component } from 'react';
import SearchBox from './components/searchbox/searchbox.component';
import CardList from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchfield: '',
    };
  }

  componentDidMount() {
    fetch('https://random-data-api.com/api/v2/users?size=20')
      .then((response) => response.json())
      .then((users) => this.setState(() => ({ monsters: users })));
  }

  onInputChange = (e) => {
    const search = e.target.value.toLowerCase();
    this.setState(() => ({ searchfield: search }));
  };

  render() {
    const { monsters, searchfield } = this.state;
    const filteredMonsters = monsters.filter((monster) => {
      return (
        monster.first_name.toLowerCase().includes(searchfield) ||
        monster.last_name.toLowerCase().includes()
      );
    });

    return (
      <div className='App'>
        <SearchBox
          className='search-box'
          placeholder='Search Robotic Monster'
          onChange={this.onInputChange}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
