import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch('https://random-data-api.com/api/v2/users?size=25')
      .then((response) => response.json())
      .then((users) => this.setState(() => ({ monsters: users })));
  }

  render() {
    return <div className='App'></div>;
  }
}

export default App;
