"use client"
import { Announcements, Attendance, Cards, Events, EventsCalendar, FinanceStats, StudentStats } from '@/components'
import React, { useState } from 'react'

const AdminPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    // You can perform additional actions with the selected date here
    console.log('Selected Date:', date);
  };
  return (
    <div className="w-full h-full flex gap-3 p-4
          max-sm:p-2
          max-sm:h-auto
          max-sm:flex-col-reverse"
     >
      <div className="w-[65%] h-full gap-3 flex flex-col 
          max-md:w-[50%]
          max-sm:w-full
      ">
        <Cards />
        <div className="flex flex-wrap gap-3">
          <div className="w-[calc(40%-8px)] p-3 bg-white shadow-sm  border rounded-2xl
                          max-xl:w-full
                          ">
            <StudentStats />
          </div>
          <div className="w-[calc(60%-8px)] p-3 bg-white shadow-sm  border rounded-2xl
                           max-xl:w-full
            ">
            <Attendance />
          </div>
          <div className="w-full p-3  bg-white shadow-sm  border rounded-2xl">
            <FinanceStats />
          </div>
        </div>
      </div>
      <div className="w-[35%] h-max flex flex-col  gap-4
            max-md:w-[50%]
            max-sm:w-full
      ">
        <div className='bg-white shadow-sm  border rounded-2xl overflow-hidden '>
        <EventsCalendar onDateChange={handleDateChange} />
        </div>
        <div className='bg-white shadow-sm  border rounded-2xl overflow-hidden '>
          <Events />
        </div>
        <div className='bg-white shadow-sm  border rounded-2xl overflow-hidden '>
          <Announcements/>
        </div>
      </div>
    </div>
  )
}

export default AdminPage