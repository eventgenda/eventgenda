"use client";

import PaginatedTable from "@/components/Table/PaginatedTable";
import { useEvent } from "@/hooks/useEvent";
import { EventType } from "@/types/event.type";
import { TableCell, TableRow } from "@mui/material";

export default function EventDashboardPage() {
  const { events } = useEvent();
  const eventHeaders = [
    "Title",
    "Description",
    "Category",
    "Created By",
    "Event Start Date",
    "Event End Date",
    "Registration Start Date",
    "Registration End Date",
    "Participants",
  ];

  function renderEventRow(event: EventType) {
    return (
      <TableRow key={event.title}>
        <TableCell>{event.title}</TableCell>
        <TableCell>{event.description}</TableCell>
        <TableCell>
          {event.categories.map((category) => category.name)}
        </TableCell>
        <TableCell>{event.createdBy.fullName}</TableCell>
        <TableCell>
          {new Date(event.eventStartDate).toLocaleDateString()}
        </TableCell>
        <TableCell>
          {new Date(event.eventEndDate).toLocaleDateString()}
        </TableCell>
        <TableCell>
          {new Date(event.registrationStartDate).toLocaleDateString()}
        </TableCell>
        <TableCell>
          {new Date(event.registrationEndDate).toLocaleDateString()}
        </TableCell>
        <TableCell>{event.participants.length}</TableCell>
      </TableRow>
    );
  }
  return (
    <div className="flex justify-center container mx-auto py-5">
      <PaginatedTable
        headers={eventHeaders}
        rows={events}
        renderRow={renderEventRow}
      />
    </div>
  );
}
