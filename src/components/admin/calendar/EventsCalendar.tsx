"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import Calendar from 'react-calendar'
import "react-calendar/dist/Calendar.css";

export const EventsCalendar = () => {

    type ValuePiece = Date | null;

    type Value = ValuePiece | [ValuePiece, ValuePiece];

  

    const [value, onChange] = useState<Value>(new Date());


    return (
        <div className="bg-white p-4 rounded-md  text-sm   ">
            <Calendar onChange={onChange} locale='eng' value={value} className="border-none w-full h-full "
            />
        </div>
    )
}

