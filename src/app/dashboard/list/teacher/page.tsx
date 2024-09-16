"use client"
import { TableSearch, TeacherForm } from '@/components'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { BsSortDownAlt } from 'react-icons/bs'
import { IoFilterOutline } from 'react-icons/io5'
import { Table, Checkbox } from '@mantine/core';

const Page = () => {

    return (
        <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0 border-t-[1px] border-gray-100">
            {/* TOP */}
            <div className="flex items-center justify-between">
                <h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
            </div>
            <TeacherForm />
            {/* LIST */}
            {/* <Table columns={columns} renderRow={renderRow} data={teachersData} /> */}
            {/* PAGINATION */}
            {/* <Pagination /> */}
        </div>
    );
}

export default Page