"use client"
import { menuItems } from '@/lib'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export const MenuD = () => {

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedMenu, setSelectedMenu] = useState<string | null>("Home");

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleMenuClick = (index: string) => {
    setSelectedMenu(index);
  };


  return (
    <div className='flex flex-col h-full p-[8px 9px 8px 0px] gap-4'>
      <Link href="" className='flex items-center justify-center md:justify-start gap-2 p-3'>
        <Image src="/logo.png" alt="logo" width={32} height={32} />
        <span className='hidden lg:block'>School Dev</span>
      </Link>
      <div className='flex flex-col gap-2 overflow-y-auto overflow-x-hidden pr-2 max-h-[85%] menuScroll'>
        {menuItems.map((i, sectionIndex) => (
          <div className='flex flex-col text-sm' key={i.title}>
            <span className='hidden lg:block font-semibold mb-3 my-6 px-3 text-[#311e63]'>{i.title}</span>
            {i.items.map((item, itemIndex) => {
              const index = sectionIndex * 100 + itemIndex; // Create a unique index for each item
              return (
                <Link
                  href={item.label}
                  key={item.label}
                  className={`flex items-center justify-center text-[#202124cf] lg:justify-start  rounded-tl-none
                               rounded-tr-full rounded-br-full rounded-bl-none gap-3  pl-8 pr-5 py-2 hover:bg-[#20212414] ${selectedMenu === item.label ? 'bg-[#dfd3fd] text-[#311e63] font-semibold' : ''} `}

                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleMenuClick(item.label)}
                >
                  <div className='text-2xl'>
                    {selectedMenu === item.label
                      ? React.createElement(item.iconSolid)
                      : React.createElement(item.iconOutlined)}
                  </div>
                  <span className='hidden lg:block truncate max-w-[70%]:'>{item.label}</span>
                </Link>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  )
}
