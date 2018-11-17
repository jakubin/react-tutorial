import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, Dupa</h1>
        <Person name="Max" age="28"/>
        <Person name="John" age="22">My hobbies: ski</Person>
      </div>
    );
  }
}

export default App;