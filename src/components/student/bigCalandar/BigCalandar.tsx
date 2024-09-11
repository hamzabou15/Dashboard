"use client"
import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";
import { calendarEvents } from "@/lib/calendarData";
// import { calendarEvents } from "@/lib/calendarData";

const localizer = momentLocalizer(moment);

interface BigCalandarProps {
  selectedDate: Date | null;
}

export const BigCalandar = ({selectedDate}:BigCalandarProps) => {
    const [view, setView] = useState<View>(Views.WORK_WEEK);

    const handleOnChangeView = (selectedView: View) => {
      setView(selectedView);
    };
    return (
        <div className="h-full">
            <Calendar
                localizer={localizer}
                events={calendarEvents}
                startAccessor="start"
                endAccessor="end"
                views={["work_week", "day"]}
                view={view}
                onView={handleOnChangeView}
                min={new Date(2024, 1, 0, 8, 0, 0)}
                max={new Date(2025, 1, 0, 17, 0, 0)}
                date={selectedDate || new Date()} 
            />
        </div>
    )
}


