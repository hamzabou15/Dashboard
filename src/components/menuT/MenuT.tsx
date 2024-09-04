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
                <div className="flex items-center gap-7 text-lg">
                    <div className="cursor-pointer">
                    <AiOutlineMessage />
                    </div>
                    <div className="relative cursor-pointer">
                        <IoMegaphoneOutline />
                        <div className="absolute w-5 h-5 rounded-full bg-[#311e63] flex items-center justify-center top-[-16px] right-[-16px]">
                            <span className="text-white text-[8px]"> 3</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-end ">
                        <span className="font-semibold text-xs">Jone DEDE</span>
                        <span className="text-xs">admin</span>
                    </div>
                    <div className="w-8 h-8 bg-[#d4862c] rounded-full flex items-center justify-center cursor-pointer">
                        <span className="text-xl font-semibold text-white" >H</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

