import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Person.module.css';
import AuthContext from '../../../containers/AuthContext';

class Person extends Component {

    static contextType = AuthContext;

    inputElement = React.createRef();

    componentDidMount() {
        if (this.props.position === 0) {
            this.inputElement.current.focus();
        }
    }

    render() {
        return (
            <div className={styles.Person} >
                {this.context ? <p>Authenticated</p> : null}
                <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old! <span onClick={this.props.deleteClicked}>X</span> </p>
                <p>{this.props.children}</p>
                <input ref={this.inputElement}
                    type="text" onChange={this.props.nameChanged} value={this.props.name} />
            </div>
        );
    }
}

Person.propTypes = {
    deleteClicked: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    nameChanged: PropTypes.func
};

export default Person;