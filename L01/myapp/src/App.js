import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "John", age: 22 }
    ]
  };

  switchNameHandler = () => {
    alert('boom');
  };

  render() {
    return (
      <div className="App">
        <h1>Hello, Dupa</h1>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: ski</Person>
      </div>
    );
  }
}

export default App;