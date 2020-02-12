import React, { Component } from 'react';
import './App.css';
import { CardContainer } from '../CardContainer/CardContainer.js';
import Form from '../Form/Form.js'


class App extends Component {
  constructor() {
    super()
    this.state = {
      cards:[]
    }
  }

  postData = obj => {
    const post = {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch('http://localhost:3001/api/v1/reservations', post)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

componentDidMount = () => {
  fetch('http://localhost:3001/api/v1/reservations')
  .then(res => res.json())
  .then(data => this.setState({ cards: data }))
}

sumbitReservation = res => {
  let reservation = { id: Date.now(), name: res.name, date: res.date, time: res.time, number: parseInt(res.number) }
  this.postData(reservation)
  this.setState({ cards: [...this.state.cards, reservation] })
}

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
        <Form sumbitReservation={this.sumbitReservation}/>
        </div>
        <div className='resy-container'>
        <CardContainer cards={this.state.cards}/>
        </div>
      </div>
    )
  }
}

export default App;
