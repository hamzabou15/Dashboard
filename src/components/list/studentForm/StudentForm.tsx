"use client"
import { teachersData } from "@/lib/lists/teachersData";
import { ListComponent } from "../ListComponent";
import { studentsData } from "@/lib/lists/studentsData";

interface Teacher {
    id: number;
    teacherId: string;
    name: string;
    email: string;
    avatar: string;
    phone: string;
    subjects: string[];
    classes: string[];
    address: string;
}
interface Column<T> {
    key: keyof T;  // The key corresponds to a property of the data
    label: string; // The label is a string displayed in the header
}

const teacherColumns: Column<Teacher>[] = [
    { key: 'name', label: 'Name' },
    { key: 'id', label: 'ID' },
    { key: 'subjects', label: 'Subjects' },
    { key: 'classes', label: 'Classes' },
    { key: 'email', label: 'Email' },
    { key: 'address', label: 'Address' },
    { key: 'phone', label: 'Phone' },
];

export const StudentForm = () => {
    return (
        <div>
            ss
            {/* <ListComponent data={studentsData} columns={teacherColumns}  Title="All Teachers"/> */}
        </div>
    )
}
