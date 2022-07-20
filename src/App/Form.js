import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: '', 
            date: '',
            time: '',
            number: '',
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value});
    }

    submitReservation = event => {
        event.preventDefault();
        const newResy = {
            id: Date.now(),
            ...this.state
        }
        this.props.addReservation(newResy)
        this.clearInputs();
    }

    clearInputs = () => {
        this.setState({ name: '', date: '', time: '', number: ''})
    }

    render() {
        return (
            <form>
                <input
                data-cy="form-name"
                type='name'
                placeholder='Name'
                name='name'
                value={this.state.name}
                onChange={event => this.handleChange(event)}
                />
                 
                <input
                data-cy="form-date"
                type='date'
                placeholder='Date'
                name='date'
                value={this.state.date}
                onChange={event => this.handleChange(event)}
                />

                <input
                data-cy="form-time"
                type='time'
                placeholder='Time'
                name='time'
                value={this.state.time}
                onChange={event => this.handleChange(event)}

                />

                <input
                data-cy="form-guests"
                type='number'
                placeholder='Number of guests'
                name='number'
                value={this.state.number}
                onChange={event => this.handleChange(event)}
                />
            <button onClick={event => this.submitReservation(event)}>Make Reservation</button>

            </form>
        )
    }
}

export default Form; 