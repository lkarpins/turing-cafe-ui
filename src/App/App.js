import React, { Component } from 'react';
import './App.css';
import ReservationContainer from './ReservationContainer';

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

  render() {
    return (
      <main className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <ReservationContainer reservations={this.state.reservations}/>
          
      </main>
    )
  }
}

export default App;
