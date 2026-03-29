/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

type SortOrder = "asc" | "desc";

interface UseTableQueryStateOptions {
  defaultSortBy?: string;
  defaultLimit?: number;
}

export const useTableQueryState = ({
  defaultSortBy = "id",
  defaultLimit = 10,
}: UseTableQueryStateOptions) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [totalItems, setTotalItems] = useState<number | null>(null);

  // Read from URL
  const page = Number(searchParams.get("page") || 1);
  const limit = Number(searchParams.get("limit") || defaultLimit);
  const sortBy = (searchParams.get("sortBy")) || defaultSortBy;
  const order = (searchParams.get("order") as SortOrder) || "desc";
  const searchQuery = searchParams.get("q") || "";

  const skip = (page - 1) * defaultLimit;
  const totalPages =
    totalItems !== null ? Math.ceil(totalItems / defaultLimit) : null;

  // Helper to update params safely
  const updateParams = (updates: Record<string, any>) => {
    const newParams = new URLSearchParams(searchParams);

    Object.entries(updates).forEach(([key, value]) => {
      if (value === undefined || value === null || value === "") {
        newParams.delete(key);
      } else {
        newParams.set(key, String(value));
      }
    });

    setSearchParams(newParams);
  };

  // Pagination
  const handlePageChange = (page: { selected: number }) => {
    updateParams({ limit, page: page?.selected + 1 });
  };

  const changeLimit = (newLimit: number) =>
    updateParams({ limit: newLimit, page: 1 });

  // Sorting
  const toggleSort = (field: string) => {
    if (field === sortBy) {
      updateParams({
        order: order === "asc" ? "desc" : "asc",
        page: 1,
      });
    } else {
      updateParams({
        sortBy: field,
        order: "asc",
        page: 1,
      });
    }
  };

  // Search
  const updateSearch = (value: string) =>
    updateParams({ q: value, page: 1 });

  
  const resetTable = () => {
    setSearchParams({});
  };

  return {
    page,
    limit,
    skip,
    sortBy,
    order,
    searchQuery,
    totalPages,
    handlePageChange,
    setTotalItems,
    changeLimit,
    toggleSort,
    updateSearch,
    resetTable,
  };
};
