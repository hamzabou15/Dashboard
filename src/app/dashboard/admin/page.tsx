import { Cards, StudentStats } from '@/components'
import React from 'react'

const AdminPage = () => {
  return (
    <div className="w-full h-full flex gap-3 p-4">
      <div className="w-[65%] h-full gap-3 flex flex-col ">
        <Cards />
        <div className="flex flex-wrap gap-3">
          <div className="w-[calc(50%-8px)] p-2 bg-white shadow-sm  border rounded-2xl">
          <StudentStats/>
          </div>
          <div className="w-[calc(50%-8px)] p-2 bg-white shadow-sm  border rounded-2xl">
            StudentStats
          </div>
          <div className="w-full p-2 bg-white rounded-xl">Element 3</div>
        </div>
      </div>
      <div className="w-[35%] h-ful">

      </div>
    </div>
  )
}

export default AdminPage