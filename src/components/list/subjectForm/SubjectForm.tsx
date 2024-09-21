"use client"
import { subjectsData } from "@/lib/lists/subjectsData";
import { ListComponent } from "../../ListComponent";

interface Subject {
    id: number;
    name: string;
    teachers: string[];
}
interface Column<T> {
    key: keyof T;  // The key corresponds to a property of the data
    label: string; // The label is a string displayed in the header
}

const subjectColumns: Column<Subject>[] = [
    { key: 'name', label: 'Name' },
    { key: 'id', label: 'ID' },
    { key: 'teachers', label: 'Teachers' }
];

export const SubjectForm = () => {
    return (
        <div>
            <ListComponent data={subjectsData} columns={subjectColumns} Title="All Subjects" />
        </div>
    )
}
