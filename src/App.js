import { useEffect, useState } from 'react';
import SearchBox from './components/searchbox/searchbox.component';
import CardList from './components/card-list/card-list.component';
import './App.css';

const App = () => {
  const [searchfield, setSearchfied] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://random-data-api.com/api/v2/users?size=20')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return (
        monster.first_name.toLowerCase().includes(searchfield) ||
        monster.last_name.toLowerCase().includes()
      );
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchfield]);

  const onInputChange = (e) => {
    const search = e.target.value.toLowerCase();
    setSearchfied(search);
  };

  return (
    <div className='App'>
      <h1>Robotic Monsters</h1>
      <SearchBox
        className='search-box'
        placeholder='Search Robotic Monster'
        onChange={onInputChange}
      />
      <CardList monsters={filteredMonsters}></CardList>
    </div>
  );
};

export default App;
