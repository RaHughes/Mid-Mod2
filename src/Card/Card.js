import React from 'react';
import './Card.css';

const Card = ({date, name, number, time}) => {
  return (
    <article className='card'>
      <p>{name}</p>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of Guests:{number}</p>
      <button>Cancel</button>
    </article>
  )
}

export default Card;