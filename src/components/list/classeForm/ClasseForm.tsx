"use client"
import { ListComponent } from "../../ListComponent";
import { classesData } from "@/lib/lists/classesData";

interface Classe {
    id: number;
    name: string;
    capacity: number;
    grade: number;
    supervisor: string;

}
interface Column<T> {
    key: keyof T;  // The key corresponds to a property of the data
    label: string; // The label is a string displayed in the header
}

const classeColumns: Column<Classe>[] = [
    { key: 'name', label: 'classe Name' },
    { key: 'id', label: 'ID' },
    { key: 'capacity', label: 'Capacity' },
    { key: 'grade', label: 'Grade' },
    { key: 'supervisor', label: 'Supervisor' }

];

export const ClasseForm = () => {
    return (
        <div>
            <ListComponent data={classesData} columns={classeColumns} Title="All Classes" />
        </div>
    )
}
