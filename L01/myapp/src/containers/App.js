import React, { Component } from 'react';
import AuthContext from './AuthContext'
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Max", age: 28 },
      { id: "2", name: "John", age: 22 },
      { id: "3", name: "John", age: 22 }
    ],
    name: "World",
    showPersons: true,
    authenticated: false,
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

  nameChangedHandler = (event, personId) => {
    const index = this.state.persons.findIndex(x => x.id === personId);

    const person = {
      ...this.state.persons[index],
      name: event.target.value
    };

    const persons = this.state.persons.slice();
    persons[index] = person;

    this.setState({ persons: persons });
  };

  loginHandler = () => {
    this.setState({ authenticated: true });
  }

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons persons={this.state.persons} nameChanged={this.nameChangedHandler} deleteClicked={this.deletePersonHandler} />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          login={this.loginHandler}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          togglePersons={this.togglePersonsHandler} />
        <AuthContext.Provider value={this.state.authenticated}>{persons}</AuthContext.Provider>
      </div>
    );
  }
}

export default App;