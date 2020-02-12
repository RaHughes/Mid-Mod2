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

  deleteData = id => {
    const del = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch(`http://localhost:3001/api/v1/reservations/${id}`, del)
    .then(res => console.log(res))
    .catch(err => console.log(err))
    this.fetchData()
    .then(data => this.setState({ cards: data }))
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

  fetchData = () => {
    return fetch('http://localhost:3001/api/v1/reservations')
    .then(res => res.json())
  }

componentDidMount = () => {
  this.fetchData()
  .then(data => this.setState({ cards: data }))
}

sumbitReservation = res => {
  let reservation = { name: res.name, date: res.date, time: res.time, number: parseInt(res.number) }
  console.log(reservation)
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
        <CardContainer cards={this.state.cards} deleteData={this.deleteData}/>
        </div>
      </div>
    )
  }
}

export default App;
