"use client";

import PaginatedTable from "@/components/Table/PaginatedTable";
import { EventRules } from "@/constants/eventrule.constants";
import { EventType } from "@/types/event.type";
import { TableCell, TableRow } from "@mui/material";

export default function EventDashboardPage() {
  const eventHeaders = [
    "Rule Name",
    "Rule Description",
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
        <TableCell>{event.category.name}</TableCell>
        <TableCell>{event.createdBy.name}</TableCell>
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
        rows={EventRules}
        renderRow={renderEventRow}
      />
    </div>
  );
}
