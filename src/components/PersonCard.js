import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }

    haveBirthday = () => {
        this.setState({ age: this.state.age+1})
    }

    render() {
        const {lastName, firstName, age, hairColor} = this.props;
        return (
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                    <button onClick={ this.haveBirthday } >Birthday Button for {firstName} {lastName}</button>
            </div>
        )
    }
}

export default PersonCard;