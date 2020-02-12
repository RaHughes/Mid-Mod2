import React from 'react';
import Card from '../Card/Card.js'
import './CardContainer.css';

export const CardContainer = ({cards}) => {
const allCards = cards.map(card => {
  return (
    <Card key={card.id} date={card.date} id={card.id} name={card.name} number={card.number} time={card.time}/>
  )
})


return (
  <div className='cardContainer'>
    {allCards}
  </div>
)
}