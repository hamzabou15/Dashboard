import React from 'react'
const events = [
    {
        id: 1,
        title: "Lorem ipsum dolor",
        date: " 2025-01-01",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 2,
        title: "Lorem ipsum dolor",
        date: " 2025-01-01",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 3,
        title: "Lorem ipsum dolor",
        date: " 2025-01-01",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
];

export const Announcements = () => {
    return (
        <div className="bg-white p-4 rounded-md text-sm">
            <div className='flex items-center justify-between mb-3'>
                <h2 className='text-[#311e63] text-lg font-semibold'>Announcements</h2>
                <div className='text-[#a7a7a7] text-base font-light cursor-pointer'>
                        <span className='font-normal text-sm hover:underline' >View all</span>
                </div>
            </div>
            {events.map((event, index) => (
                    <div
                        className={`p-5 rounded-md border-0 border-gray-100 border-b-4 odd:border-t-lamaSky even:border-t-lamaPurple rbc-borders
                            ${index == events.length - 1 && 'border-b-0'}
                            `}
                        key={event.id}
                    >
                        <div className="flex items-center justify-between">
                            <h1 className="font-semibold text-gray-600">{event.title}</h1>
                            <span className="text-[#000000] text-[12px] font-semibold">{event.date}</span>
                        </div>
                        <p className="mt-2 text-[#202124] text-sm">{event.description}</p>
                    </div>
                ))}
        </div>
    )
}

