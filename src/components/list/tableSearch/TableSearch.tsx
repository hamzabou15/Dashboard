import Image from 'next/image';
import React from 'react'
import { CiSearch } from 'react-icons/ci';

export const TableSearch = () => {
    return (
        <div className='flex items-center gap-3 border border-[#20212414] border-w-[3px] rounded-full p-1 px-2 '>
            <CiSearch />
            <input type="text" placeholder="Search..." className="border-none bg-transparent " />
        </div>
    );
}


