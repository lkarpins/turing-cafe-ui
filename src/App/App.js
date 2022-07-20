import React, { Component } from 'react';
import ReservationContainer from './ReservationContainer';
import Form from './Form';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [
      ],
      error: ''
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
      .then(reservations => {
        this.setState({ reservations })
      })
      .catch(err => {
        this.setState({err: err.message})
      })

  }

  addReservation = (newResy) => {
    this.setState({ reservations: [...this.state.reservations, newResy]})
  }

  render() {
    return (
      <main className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form addReservation={this.addReservation}/>
        <ReservationContainer reservations={this.state.reservations}/>
          
      </main>
    )
  }
}

export default App;
