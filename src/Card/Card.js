import React from 'react';
import './Card.css';

const Card = ({date, name, number, time, deleteData, id}) => {
  return (
    <article className='card'>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time} PM</p>
      <p>Number of Guests:{number}</p>
      <button className='submit' onClick={() => deleteData(id)}>Cancel</button>
    </article>
  )
}

export default Card;