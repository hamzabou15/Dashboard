"use client"
import { teachersData } from "@/lib/lists/teachersData";
import { ListComponent } from "../ListComponent";
import { parentsData } from "@/lib/lists/parentsData";

interface Parent {
    id: number;
    name:string;
    students: string[];
    email: string;
    phone: string;
    address: string;
}
interface Column<T> {
    key: keyof T;  // The key corresponds to a property of the data
    label: string; // The label is a string displayed in the header
}

const parentColumns: Column<Parent>[] = [
    { key: 'name', label: 'Name' },
    { key: 'id', label: 'ID' },
    { key: 'students', label: 'Students' },
    { key: 'email', label: 'Email' },
    { key: 'address', label: 'Address' },
    { key: 'phone', label: 'Phone' },
];

export const ParentForm = () => {
    return (
        <div>
            <ListComponent data={parentsData} columns={parentColumns}  Title="All Parents"/>
        </div>
    )
}
