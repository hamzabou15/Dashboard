import { menuItems } from '@/lib'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const MenuD = () => {


  return (
    <div className='flex flex-col h-full p-[8px 9px 8px 0px] gap-4'>
      <Link href="" className='flex items-center justify-center md:justify-start gap-2 p-3'>
        <Image src="/logo.png" alt="logo" width={32} height={32} />
        <span className='hidden lg:block'>School Dev</span>
      </Link>
      <div className='flex flex-col gap-2 overflow-y-auto overflow-x-hidden pr-2 max-h-[85%] menuScroll'>
        {
          menuItems.map(i => (
            <div className='flex flex-col text-sm ' key={i.title}>
              <span className='hidden lg:block font-semibold mb-3 text- px-3 text-[#202124] '>{i.title}</span>
              {
                i.items.map(item => (
                  <Link
                    href={item.href}
                    key={item.label}
                    className='flex items-center justify-center text-[#202124cf] lg:justify-start truncate rounded-tl-none
                               rounded-tr-full rounded-br-full rounded-bl-none gap-3  px-5 py-2 hover:bg-[#20212414]'>
                    <div className='text-2xl'>
                      {React.createElement(item.iconOutlined)} {/* Render the component */}
                    </div>
                    <span className='hidden lg:block'>{item.label}</span>
                  </Link>
                ))
              }
            </div>
          ))
        }
      </div>
    </div>
  )
}
