"use client"
import { assignmentsData } from "@/lib/lists/assignmentsData";
import { ListComponent } from "../../ListComponent";
import { resultsData } from "@/lib/lists/resultsData";

interface Result {
    id: number;
    student: string;
    class: string;
    teacher: string;
    CoursSubject: string;
    date: string;
    type: string;
    score: number;

}
interface Column<T> {
    key: keyof T;  // The key corresponds to a property of the data
    label: string; // The label is a string displayed in the header
}

const resultColumns: Column<Result>[] = [
    { key: 'student', label: 'Student' },
    { key: 'id', label: 'ID' },
    { key: 'class', label: 'Class' },
    { key: 'CoursSubject', label: 'Subject Name' },
    { key: 'teacher', label: 'Teacher' },
    { key: 'date', label: 'Date' },
    { key: 'type', label: 'Type' },
    { key: 'score', label: 'Score' },
];

export const ResultForm = () => {
    return (
        <div>
            <ListComponent data={resultsData} columns={resultColumns} Title=" Results of All Students" />
        </div>
    )
}
