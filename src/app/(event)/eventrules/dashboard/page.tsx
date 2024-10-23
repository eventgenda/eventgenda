"use client";

import PaginatedTable from "@/components/Table/PaginatedTable";
import { EventRules } from "@/constants/eventrule.constants";
import { EventRuleType } from "@/types/event-rule.type";
import { TableCell, TableRow } from "@mui/material";

export default function EventDashboardPage() {
  const eventHeaders = [
    "Rule Name",
    "Rule Description",
    "Created At",
    "Updated At",
  ];

  // Use a consistent date format with 'en-US' locale
  function formatDate(date: string | Date) {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  }

  function renderEventRuleRow(eventRule: EventRuleType) {
    return (
      <TableRow key={eventRule._id}>
        <TableCell>{eventRule.name}</TableCell>
        <TableCell>{eventRule.description}</TableCell>
        <TableCell>{formatDate(eventRule.createdAt)}</TableCell>
        <TableCell>{formatDate(eventRule.updatedAt)}</TableCell>
      </TableRow>
    );
  }

  return (
    <div className="flex justify-center container mx-auto py-5">
      <PaginatedTable
        headers={eventHeaders}
        rows={EventRules}
        renderRow={renderEventRuleRow}
      />
    </div>
  );
}
