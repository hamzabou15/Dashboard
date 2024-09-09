import { Attendance, Cards, EventsCalendar, FinanceStats, StudentStats } from '@/components'
import React from 'react'

const AdminPage = () => {
  return (
    <div className="w-full h-full flex gap-3 p-4">
      <div className="w-[65%] h-full gap-3 flex flex-col ">
        <Cards />
        <div className="flex flex-wrap gap-3">
          <div className="w-[calc(40%-8px)] p-3 bg-white shadow-sm  border rounded-2xl">
            <StudentStats />
          </div>
          <div className="w-[calc(60%-8px)] p-3 bg-white shadow-sm  border rounded-2xl">
            <Attendance />
          </div>
          <div className="w-full p-3  bg-white shadow-sm  border rounded-2xl">
            <FinanceStats />
          </div>
        </div>
      </div>
      <div className="w-[35%] h-ful">
      <EventsCalendar/>
      </div>
    </div>
  )
}

export default AdminPage