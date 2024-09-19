import React from 'react'
import { CiSearch } from "react-icons/ci";
import { AiOutlineMessage } from "react-icons/ai";
import { IoMegaphoneOutline } from "react-icons/io5";


export const MenuT = () => {
    return (
        <div className=' flex items-center justify-between p-4  rounded-lg
                        max-sm:p-2
            '>
            <div className='text-[#330c4f]
                    max-md:hidden
            '>
                <h1 className='text-xl font-semibold'>
                    Dashboard
                </h1>
            </div>
            <div className='max-sm:w-[50%]'>
                <div className='flex items-center relative gap-3 w-[250px] bg-transparent  text-[#6e6d7a] h-[45px] rounded-full p-2 px-3 border-transparent border-[2px]
                                '>
                    <CiSearch
                        className='text-[#6e6d7a] z-10 relative'
                    />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="absolute top-0 left-0 mt-[-2px] h-full bg-[#f4f5fb]  w-full pl-9 border-transparent border-[2px]  rounded-full
                                 focus:border-[#330c4f3b] focus:bg-transparent
                                 hover:border-[#330c4f23] hover:bg-transparent
                                 "
                    />
                </div>
            </div>
            <div className='max-sm:w-[50%]'>
                <div className="flex items-center gap-7 text-lg
                                max-sm:gap-4
                                max-sm:justify-end"
                >
                    <div className="cursor-pointer
                                    max-sm:hidden"
                    >
                        <AiOutlineMessage />
                    </div>
                    <div className="relative cursor-pointer
                                    max-sm:hidden"
                    >
                        <IoMegaphoneOutline />
                        <div className="absolute w-5 h-5 rounded-full bg-[#311e63] flex items-center justify-center top-[-16px] right-[-16px]">
                            <span className="text-white text-[8px]"> 3</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-end ">
                        <span className="font-semibold text-xs">Jone DEDE</span>
                        <span className="text-xs">admin</span>
                    </div>
                    <div className="w-8 h-8 bg-[#330c4f88] rounded-full flex items-center justify-center cursor-pointer">
                        <span className="text-xl font-semibold text-white" >J</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

