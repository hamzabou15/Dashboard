"use client"
import React from 'react'
import { MdMoreHoriz } from 'react-icons/md'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


export const FinanceStats = () => {

    
const data = [
    {
      name: "Jan",
      income: 4000,
      expense: 2400,
    },
    {
      name: "Feb",
      income: 3000,
      expense: 1398,
    },
    {
      name: "Mar",
      income: 2000,
      expense: 9800,
    },
    {
      name: "Apr",
      income: 2780,
      expense: 3908,
    },
    {
      name: "May",
      income: 1890,
      expense: 4800,
    },
    {
      name: "Jun",
      income: 2390,
      expense: 3800,
    },
    {
      name: "Jul",
      income: 3490,
      expense: 4300,
    },
    {
      name: "Aug",
      income: 3490,
      expense: 4300,
    },
    {
      name: "Sep",
      income: 3490,
      expense: 4300,
    },
    {
      name: "Oct",
      income: 3490,
      expense: 4300,
    },
    {
      name: "Nov",
      income: 3490,
      expense: 4300,
    },
    {
      name: "Dec",
      income: 3490,
      expense: 4300,
    },
  ];

  return (
    <div className='flex flex-col h-full justify-between '>
    <div className='flex items-center justify-between'>
        <h2 className='text-[#311e63] text-base font-semibold'>Finance</h2>
        <div className='text-[#a7a7a7] text-2xl cursor-pointer'>
            <MdMoreHoriz />
        </div>
    </div>
    <div className="relative w-full h-[350px] ">
    <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#4b5563" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis axisLine={false} tick={{ fill: "#4b5563" }} tickLine={false}  tickMargin={20}/>
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#fb8b24
"
            strokeWidth={5}
          />
          <Line type="monotone" dataKey="expense" stroke="#8ecae6" strokeWidth={5}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
</div>
  )
}

