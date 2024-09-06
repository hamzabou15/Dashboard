"use client"
import Image from 'next/image';
import React from 'react';
import { MdMoreHoriz } from 'react-icons/md';
import { Legend, RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: "Total",
        count: 1200,
        fill: "white",
    },
    {
        name: "Girls",
        count: 570,
        fill: "#fb8b24",
    },
    {
        name: "Boys",
        count: 630,
        fill: "#8ecae6",
    },
];
const style = {
    top: 0,
    left: 350,
    lineHeight: "24px",
};

const countTotal = data[0].count;

export const StudentStats = () => {


    return (
        <div className='flex flex-col '>
            <div className='flex items-center justify-between'>
                <h2 className='text-[#311e63] text-base font-semibold'>Students</h2>
                <div className='text-[#a7a7a7] text-2xl cursor-pointer'>
                    <MdMoreHoriz />
                </div>
            </div>
            <div className="relative w-full h-[250px] ">
                <ResponsiveContainer>
                    <RadialBarChart
                        cx="50%"
                        cy="50%"
                        innerRadius="40%"
                        outerRadius="100%"
                        barSize={32}
                        data={data}
                    >
                        <RadialBar background dataKey="count" />
                    </RadialBarChart>
                </ResponsiveContainer>
                <Image
                    src="/maleFemale.png"
                    alt=""
                    width={50}
                    height={50}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
            </div>
            <div className="flex justify-center gap-16">
                {
                    data.map((item, index) => (
                        index !== 0 &&
                        <div className="flex flex-col gap-1" key={index}>
                            <h1 className={`font-bold text-[#311e63] ${item.name === "Girls" ?'text-[#fb8b24]' : 'text-[#8ecae6]'} `}>{item.count}</h1>
                            <h2 className="text-xs text-gray-600">{item.name} ({(item.count/countTotal)*100}%)</h2>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};
