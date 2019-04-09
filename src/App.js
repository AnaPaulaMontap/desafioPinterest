import React, { Component } from 'react';
import './App.css';
import Search from './search'
import Navbar from './Navbar'


class App extends Component {
  render() {
    return (
      <div>   
      <Navbar/>    
      <Search/>       
      </div>
    );
  }
}

export default App;
