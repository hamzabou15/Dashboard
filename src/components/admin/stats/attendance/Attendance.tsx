"use client"
import React from 'react'
import { MdMoreHoriz } from 'react-icons/md'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
const data = [
    {
        name: "Mon",
        present: 60,
        absent: 40,
    },
    {
        name: "Tue",
        present: 70,
        absent: 60,
    },
    {
        name: "Wed",
        present: 90,
        absent: 75,
    },
    {
        name: "Thu",
        present: 90,
        absent: 75,
    },
    {
        name: "Fri",
        present: 65,
        absent: 55,
    },
];
export const Attendance = () => {
    return (
        <div className='flex flex-col h-full justify-between '>
            <div className='flex items-center justify-between'>
                <h2 className='text-[#311e63] text-base font-semibold'>Attendance</h2>
                <div className='text-[#a7a7a7] text-2xl cursor-pointer'>
                    <MdMoreHoriz />
                </div>
            </div>
            <div className="relative w-full h-[100%] ">
                <ResponsiveContainer width="100%" height="90%">
                    <BarChart width={500} height={300} data={data} barSize={20}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tick={{ fill: "rgb(75 85 99)" }}
                            tickLine={false}
                        />
                        <YAxis axisLine={false} tick={{ fill: "rgb(75 85 99)" }} tickLine={false} />
                        <Tooltip
                            contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
                        />
                        <Legend
                            align="left"
                            verticalAlign="top"
                            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
                        />
                        <Bar
                            dataKey="present"
                            fill="#fb8b24"
                            legendType="circle"
                            radius={[10, 10, 0, 0]}
                        />
                        <Bar
                            dataKey="absent"
                            fill="#8ecae6"
                            legendType="circle"
                            radius={[10, 10, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

