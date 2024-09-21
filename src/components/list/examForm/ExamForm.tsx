"use client"
import { examsData } from "@/lib/lists/examsData";
import { ListComponent } from "../../ListComponent";

interface Exam {
    id: number;
    subject: string;
    class: string;
    teacher: string;
    date: string;

}
interface Column<T> {
    key: keyof T;  // The key corresponds to a property of the data
    label: string; // The label is a string displayed in the header
}

const examColumns: Column<Exam>[] = [
    { key: 'id', label: 'ID' },
    { key: 'subject', label: 'Subject' },
    { key: 'class', label: 'Class' },
    { key: 'teacher', label: 'Teacher' },
    { key: 'date', label: 'Date' }

];

export const ExamForm = () => {
    return (
        <div>
            <ListComponent data={examsData} columns={examColumns} Title="All Exams" />
        </div>
    )
}
