import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./calendar.css";

function Calendar({ events }) {
  const formattedEvents = events.map((e, i) => ({
    id: i.toString(),
    title: e.title,
    start: `${e.date}T${e.startTime}`,
    end: `${e.date}T${e.endTime}`,
    color: e.color,
  }));

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      headerToolbar={{
        start: "prev,next today",
        center: "title",
        end: "dayGridMonth,timeGridWeek,timeGridDay",
      }}
      height="80vh"
      events={formattedEvents}
      dayMaxEventRows={3}
      nowIndicator={true}
      eventDisplay="block"
    />
  );
}

export default Calendar;
