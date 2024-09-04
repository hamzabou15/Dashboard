import React from 'react'
import { MdMoreHoriz } from 'react-icons/md'

type items = {
    id: number,
    type: string,
    date: string,
    numberOf: number,
    bgColor: string,
}


export const Card = (items: items) => {
    return (
        <div className={`flex-1 rounded-xl p-2 flex flex-col justify-between gap-3 overflow-hidden`} style={{ backgroundColor: items.bgColor }}>
            <div className='flex items-center justify-between'>
                <span className={`p-1 text-[9px] font-bold bg-[#fffdfd] rounded-full`} style={{ color: items.bgColor }} >{items.date}</span>
                <div className='text-white text-xl'>
                    <MdMoreHoriz />
                </div>
            </div>
            <div className='text-[#150a1f] font-semibold text-base'>
                <span>{items.numberOf}</span>
            </div>
            <div className='text-[#2d2d2d] font-medium text-[10px]'>
                <span className='tracking-wide'>{items.type}</span>
            </div>
        </div>
    )
}


