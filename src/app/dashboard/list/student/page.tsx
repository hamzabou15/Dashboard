"use client"
import { StudentForm } from '@/components'
import React from 'react'


const Page = () => {

    return (
        <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0 border-t-[1px] border-gray-100">
            <StudentForm />
        </div>
    );
}

export default Page