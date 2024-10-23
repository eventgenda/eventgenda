"use client";

import PaginatedTable from "@/components/Table/PaginatedTable";
import { LocationType } from "@/types/location.type";
import { TableCell, TableRow } from "@mui/material";
import { useLocation } from "@/hooks/useLocation";
import { useEffect } from "react";

export default function LocationDashboardPage() {
  const { locationsQuery } = useLocation();
  const { data: locationsResponse, isLoading, isError } = locationsQuery;

  const locations = locationsResponse?.data || [];

  const locationHeaders = [
    "Name",
    "Location",
    "Prices",
    "Created Date",
    "Updated Date",
  ];

  function renderEventRow(location: LocationType) {
    return (
      <TableRow key={location._id}>
        <TableCell>{location.name}</TableCell>
        <TableCell>{location.location}</TableCell>
        <TableCell>{location.prices}</TableCell>
        <TableCell>
          {new Date(location.createdAt).toLocaleDateString()}
        </TableCell>
        <TableCell>
          {new Date(location.updatedAt).toLocaleDateString()}
        </TableCell>
      </TableRow>
    );
  }

  if (isLoading) {
    return <div>Loading locations...</div>;
  }

  if (isError) {
    return <div>Error loading locations</div>;
  }

  return (
    <div className="flex justify-center container mx-auto py-5">
      <PaginatedTable
        headers={locationHeaders}
        rows={locations}
        renderRow={renderEventRow}
      />
    </div>
  );
}
