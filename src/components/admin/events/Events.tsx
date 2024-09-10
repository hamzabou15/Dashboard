import Image from 'next/image'
import React from 'react'
import { MdMoreHoriz } from 'react-icons/md';

export const Events = () => {
    // TEMPORARY
    const events = [
        {
            id: 1,
            title: "Lorem ipsum dolor",
            time: "12:00 PM - 2:00 PM",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            id: 2,
            title: "Lorem ipsum dolor",
            time: "12:00 PM - 2:00 PM",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            id: 3,
            title: "Lorem ipsum dolor",
            time: "12:00 PM - 2:00 PM",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
    ];
    return (
        <div className="bg-white p-4 rounded-md  text-sm   ">
            <div className="flex flex-col gap-4">
                <div className='flex items-center justify-between'>
                    <h2 className='text-[#311e63] text-base font-semibold'>Events</h2>
                    <div className='text-[#a7a7a7] text-2xl cursor-pointer'>
                        <MdMoreHoriz />
                    </div>
                </div>
                {events.map((event, index) => (
                    <div
                        className={`p-5 rounded-md border-0 border-gray-100 border-b-4 odd:border-t-lamaSky even:border-t-lamaPurple
                            ${index == events.length - 1 && 'border-b-0'}
                            `}
                        key={event.id}
                    >
                        <div className="flex items-center justify-between">
                            <h1 className="font-semibold text-gray-600">{event.title}</h1>
                            <span className="text-[#6aa2bb] text-xs">{event.time}</span>
                        </div>
                        <p className="mt-2 text-[#202124] text-sm">{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

