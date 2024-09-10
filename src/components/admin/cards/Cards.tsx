import React from 'react'
import { Card } from './card/Card'
import { cardsData } from '@/lib/cardsData'

export const Cards = () => {
  return (
    <div className='flex gap-2
                    max-lg:grid
                    max-lg:grid-cols-[49%_49%]
                    max-md:grid-cols-1
                    max-sm:grid-cols-[49%_49%]
    ' >
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
