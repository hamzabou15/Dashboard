"use client"
import { Announcements, BigCalandar, Events, EventsCalendar } from '@/components'
import React, { useState } from 'react'

const StudentPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    console.log('Selected Date:', date);
  };

  return (
    <div className="w-full h-full flex gap-3 p-4 relative
    max-sm:p-2
    max-lg:h-auto
    max-lg:flex-col-reverse"
    >
      <div className="w-[65%] h-full gap-3 flex flex-col 
    max-lg:w-full
    sticky
    top-0
">
        <BigCalandar
          selectedDate={selectedDate}
        />
      </div>
      <div className="w-[35%] h-max flex flex-col  gap-4
      max-lg:w-full
">
        <div className='bg-white shadow-sm border rounded-2xl overflow-hidden'>
          <EventsCalendar onDateChange={handleDateChange} />
        </div>
        <div className='bg-white shadow-sm border rounded-2xl overflow-hidden'>
          <Announcements />
        </div>
      </div>
    </div>
  )
}

export default StudentPage
