import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

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
  return (
    <div className="App">
     <input type='search'                               //making searchbox
     placeholder='search monster'                       
     onchange={e => this.setstate({ searchField: e.target.value })}  //targeting searchField state event value
      />                  
     <CardList monster= {this.state.monster} />           
    </div>                                              //Carlist is assigned to monster
    
  );
}
}

export default App;
