"use client"
import { teachersData } from "@/lib/lists/teachersData";
import { ListComponent } from "../../ListComponent";
import { studentsData } from "@/lib/lists/studentsData";

interface Student {
    id: number;
    studentId: string;
    name: string;
    email: string;
    avatar: string;
    phone: string;
    grade: number;
    class: string;
    address: string;
}
interface Column<T> {
    key: keyof T;  // The key corresponds to a property of the data
    label: string; // The label is a string displayed in the header
}

const studentColumns: Column<Student>[] = [
    { key: 'name', label: 'Name' },
    { key: 'id', label: 'ID' },
    { key: 'grade', label: 'Grade' },
    { key: 'class', label: 'Class' },
    { key: 'email', label: 'Email' },
    { key: 'address', label: 'Address' },
    { key: 'phone', label: 'Phone' },
];

export const StudentForm = () => {
    return (
        <div>
            <ListComponent data={studentsData} columns={studentColumns}  Title="All Teachers"/>
        </div>
    )
}
