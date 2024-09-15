"use client"
import useWindowWidth from '@/functions/widthSize'
import { menuItems } from '@/lib'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
export const MenuD = () => {

  const [selectedMenu, setSelectedMenu] = useState<string | null>("Home");
  const handleMenuClick = (index: string) => {
    setSelectedMenu(index);
  };

  const windowWidth = useWindowWidth();
  return (
    <div className='flex flex-col h-full p-[8px 0px 8px 8px] pl-2 gap-4'>
      <Link href="/" className='flex items-center justify-center  gap-2 p-3 '>
      <Image
            src={windowWidth < 1024 ? '/logoRespo.svg' : '/logo.svg'}
            alt="logo"
            width={92}
            height={42}
        />
      </Link>
      <div className='flex flex-col  overflow-y-auto overflow-x-hidden  max-h-[85%] menuScroll'>
        {menuItems.map((i, sectionIndex) => (
          <div className='flex flex-col text-sm' key={sectionIndex}>
            {i.items.map((item, itemIndex) => {
              const index = sectionIndex * 100 + itemIndex; // Create a unique index for each item
              return (
                <Link
                  href={item.label}
                  key={item.label}
                  className={` relative flex items-center justify-center  font-light  lg:justify-start  rounded-tl-full 
                               rounded-tr-nonne rounded-br-nonne rounded-bl-full gap-5 h-10 pl-8 pr-5   hover:bg-[#fbf6f131]
                               ${selectedMenu === item.label ? ' text-[#ffa03b] sticky top-0 z-30  bg-white hover:bg-[#fbf6f1] ' : 'text-white bg-transparent '}
                               max-lg:pl-5
                               `}

                  onClick={() => handleMenuClick(item.label)}
                >
                  <div className='text-xl relative z-10'>
                    {selectedMenu === item.label
                      ? React.createElement(item.iconSolid)
                      : React.createElement(item.iconOutlined)}
                  </div>
                  <span className='hidden lg:block truncate max-w-[70%] relative z-10'>{item.label}</span>
                </Link>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  )
}
