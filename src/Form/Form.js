import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: '',
      name: '',
      number: '',
      time: ''
    }
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({[event.target.name]: event.target.value})
  }

  addRes = () => {
    let reservation =  { 
      name: this.state.name,
      date: this.state.date,
      number: this.state.number,
      times: this.state.time }
      this.props.sumbitReservation(reservation)
  }

  render() {
    return(
      <section>
        <input 
        type='text'
        placeholder='Name'
        name='name'
        value={this.state.name}
        onChange={this.handleChange}
        />
        <input 
        type='text'
        placeholder='Date(mm/dd)'
        name='date'
        value={this.state.date}
        onChange={this.handleChange}/>
        <input 
        type='text'
        placeholder='Time'
        name='time'
        value={this.state.time}
        onChange={this.handleChange}/>
        <input 
        type='text'
        placeholder='Number of Guests'
        name='number'
        value={this.state.number}
        onChange={this.handleChange}/>
        <button onClick={this.addRes}>Make Reservation</button>
      </section>
    )
  }
}

export default Form;