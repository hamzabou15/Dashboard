"use client"
import { ListComponent } from "../../ListComponent";
import { lessonsData } from "@/lib/lists/lessonsData";

interface Lesson {
    id: number;
    subject: string;
    class: string;
    teacher: string;
}
interface Column<T> {
    key: keyof T;  // The key corresponds to a property of the data
    label: string; // The label is a string displayed in the header
}

const lessonColumns: Column<Lesson>[] = [
    { key: 'id', label: 'ID' },
    { key: 'subject', label: 'Subject' },
    { key: 'class', label: 'Class' },
    { key: 'teacher', label: 'Teacher' },
];

export const LessonForm = () => {
    return (
        <div>
            <ListComponent data={lessonsData} columns={lessonColumns} Title="All Parents" />
        </div>
    )
}
