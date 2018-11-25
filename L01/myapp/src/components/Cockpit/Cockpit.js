import React from 'react';
import withClass from '../../hoc/withClass';
import classes from './cockpit.module.css';

const cockpit = (props) => {
  let assignedClasses = [];
  let btnClass = props.showPersons ? classes.show : classes.hide;

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <>
      <h1>Hello {props.name}</h1>
      <p className={assignedClasses.join(' ')}>The list has:</p>
      <button className={btnClass} onClick={props.togglePersons}>Toggle</button>
      <button onClick={props.login}>Log in</button>
    </>
  );
};

export default React.memo(withClass(cockpit, classes.Cockpit));