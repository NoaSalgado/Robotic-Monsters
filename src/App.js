import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch('https://random-data-api.com/api/v2/users?size=20')
      .then((response) => response.json())
      .then((users) => this.setState(() => ({ monsters: users })));
  }

  render() {
    const { monsters } = this.state;

    return (
      <div className='App'>
        <CardList monsters={monsters}></CardList>
      </div>
    );
  }
}

export default App;
