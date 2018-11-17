import React from 'react';
import './Person.css';

const person = (props) => {
    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px'
    };
    return (
        <div className="Person">
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old! <span onClick={props.deleteClicked}>X</span> </p>
            <p>{props.children}</p>
            <input style={style} type="text" onChange={props.nameChanged} value={props.name}/>
        </div>
    );
};

export default person;