"use client";

import PaginatedTable from "@/components/Table/PaginatedTable";
import { Categories } from "@/constants/category.constants";
import { CreategoryType } from "@/types/category.type";
import { TableCell, TableRow } from "@mui/material";

export default function CategoriesDashboardPage() {
  const categoryHeaders = [
    "Category Name",
    "Category Description",
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

  function renderCategoryRow(category: CreategoryType) {
    return (
      <TableRow key={category._id}>
        <TableCell>{category.name}</TableCell>
        <TableCell>{category.description}</TableCell>
        <TableCell>{formatDate(category.createdAt)}</TableCell>
        <TableCell>{formatDate(category.updatedAt)}</TableCell>
      </TableRow>
    );
  }
  return (
    <div className="flex justify-center container mx-auto py-5">
      <PaginatedTable
        headers={categoryHeaders}
        rows={Categories}
        renderRow={renderCategoryRow}
      />
    </div>
  );
}
