"use client"
import { ListComponent } from "../../ListComponent";
import { eventsData } from "@/lib/lists/eventsData";

interface Event {
    id: number;
    title: string;
    class: string;
    date: string;
    startTime: string;
    endTime: string;
}
interface Column<T> {
    key: keyof T;  // The key corresponds to a property of the data
    label: string; // The label is a string displayed in the header
}

const eventColumns: Column<Event>[] = [
    { key: 'title', label: 'Title' },
    { key: 'id', label: 'ID' },
    { key: 'class', label: 'Class' },
    { key: 'date', label: 'Date' },
    { key: 'startTime', label: 'Start Time' },
    { key: 'endTime', label: 'End Time' }
];

export const EventForm = () => {
    return (
        <div>
            <ListComponent data={eventsData} columns={eventColumns} Title="All Events" />
        </div>
    )
}
