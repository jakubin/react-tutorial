import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "John", age: 22 },
      { name: "John", age: 22 }
    ],
    name: "World",
    showPersons: true
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  };

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons: persons
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 22 }
      ]
    });
  };

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) =>
            (
              <Person
                name={person.name}
                age={person.age}
                nameChanged={this.nameChangedHandler}
                deleteClicked={() => this.deletePersonHandler(index)} />
            )
          )}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hello {this.state.name}</h1>
        <button onClick={this.togglePersonsHandler}>Switch name</button>
        {persons}
      </div>
    );
  }
}

export default App;