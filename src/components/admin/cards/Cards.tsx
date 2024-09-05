import React from 'react'
import { Card } from './card/Card'
import { cardsData } from '@/lib/cardsData'

export const Cards = () => {
  return (
    <div className='flex gap-2  ' >
      {
        cardsData.map(card => (
          card.items.map(items => (
            <Card 
              key={items.id} 
              id={items.id}
              type={items.type}
              numberOf={items.numberOf}
              date={items.date}  
              bgColor={items.bgColor}
             />
          ))
        ))
      }
    </div>
  )
}
