"use client"
import { assignmentsData } from "@/lib/lists/assignmentsData";
import { ListComponent } from "../../ListComponent";

interface Assignment {
    id: number;
    subjectName: string;
    class: string;
    teacher: string;
    dueDate: string;

}
interface Column<T> {
    key: keyof T;  // The key corresponds to a property of the data
    label: string; // The label is a string displayed in the header
}

const assignmentColumns: Column<Assignment>[] = [
    { key: 'subjectName', label: 'Subject Name' },
    { key: 'id', label: 'ID' },
    { key: 'class', label: 'Class' },
    { key: 'teacher', label: 'Teacher' },
    { key: 'dueDate', label: 'DueDate' }

];

export const AssignmentForm = () => {
    return (
        <div>
            <ListComponent data={assignmentsData} columns={assignmentColumns} Title="All Assignments" />
        </div>
    )
}
