import React from 'react';
import Person from './Person/Person';

const persons = (props) => (
    <div>
        {props.persons.map((person, index) =>
            (
                <Person
                    key={person.id}
                    position={index}
                    name={person.name}
                    age={person.age}
                    nameChanged={(event) => props.nameChanged(event, person.id)}
                    deleteClicked={() => props.deleteClicked(index)} />
            )
        )}
    </div>
);

export default persons;