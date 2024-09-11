"use client"
import { useState } from 'react';
import Calendar from 'react-calendar'
import "react-calendar/dist/Calendar.css";

interface EventsCalendarProps {
    onDateChange: (date: Date | null) => void;
}

export const EventsCalendar = ({ onDateChange }: EventsCalendarProps) => {
    const [value, setValue] = useState<Date | null>(new Date());

    const handleDateChange = (newValue: Date | Date[]) => {
        const selectedDate = Array.isArray(newValue) ? newValue[0] : newValue;
        setValue(selectedDate);
        onDateChange(selectedDate);
    };

    return (
        <div className="bg-white p-4 rounded-md text-sm">
            <Calendar
                onChange={handleDateChange as any} 
                value={value}
                className="border-none w-full h-full"
            />
        </div>
    );
};
