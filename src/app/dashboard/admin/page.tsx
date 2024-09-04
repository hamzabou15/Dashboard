import { Cards } from '@/components'
import React from 'react'

const AdminPage = () => {
  return (
    <div className="w-full h-full flex gap-3 ">
        <div className="w-[65%] h-full">
            <Cards/>   
        </div>
        <div className="w-[35%] h-ful">

        </div>
    </div>
  )
}

export default AdminPage