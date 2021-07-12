import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import { SearchBox }  from './components/search-box/search-box.component';

class App extends Component {
  constructor(){                 //we are creating constructor
    super();                     //super gets called before constructor


    this.state = {
      monster: [],              //we are creating empty array
      searchField: ''           //searchField event to search
    };
  }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')    //it fetches our API 
  .then(response => response.json())                     //makes promises then response uses json method
  .then(users => this.setState({ monster: users }));     //monster is assigned to user
}

  render() {
    const { monster, searchField } = this.state;
    const filteredMonster = monster.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
      );

  return (
    <div className="App">     
     <h1>Monster Reledox</h1>        
     <SearchBox 
     placeholder='search monster'
     handleChange={e => this.setState({ searchField: e.target.value })}
      /> 
     <CardList monster = {filteredMonster} />           
    </div>                                                                                                  //filtering cardlist 
  );
}
}

export default App;
