import React from 'react'
import { CiSearch } from "react-icons/ci";
import { AiOutlineMessage } from "react-icons/ai";
import { IoMegaphoneOutline } from "react-icons/io5";


export const MenuT = () => {
    return (
        <div className=' flex items-center justify-between p-4 bg-white rounded-lg'>
            <div className=''>
                <div className='flex items-center gap-3 border border-[#20212414] border-w-[3px] rounded-full p-2 '>
                    <CiSearch />
                    <input type="text" placeholder="Search" className="border-none bg-transparent " />
                </div>
            </div>
            <div className=''>
                <div className="flex items-center gap-3 text-lg">
                    <AiOutlineMessage/>
                    <IoMegaphoneOutline/>
                    <div className="flex flex-col items-end">
                        <span className="font-semibold text-xs">Jone DEDE</span>
                        <span className="text-xs">admin</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

