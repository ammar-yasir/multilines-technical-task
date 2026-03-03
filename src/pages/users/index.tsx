/* eslint-disable react-hooks/preserve-manual-memoization */
import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { debounce } from "underscore";
import { ROLE_MAP, type User, type Role } from "./types";
import Card from "../../components/Card/Card";
import DataTable from "../../components/DataTable";
import Pagination from "../../components/Pagination/Pagination";
import BackButton from "../../components/BackButton/BackButton";
import Search from "../../components/Search/Search";
import { Badge } from "../../components/Badge/Badge";
import { userService } from "../../api/userService";
import { useTableQueryState } from "../../hooks/useTableQueryState";
import type { Column } from "../../components/DataTable/DataTable.types";
import TableSkeleton from "../../components/SkeletonLoading/TableSkeleton";
import "react-loading-skeleton/dist/skeleton.css";

const columns: Column<User>[] = [
  { key: "id", label: "Id", sortable: true },
  {
    key: "firstName",
    label: "Name",
    sortable: true,
    render: (val: string) => (
      <span className="text-gray-500 font-medium border-gray-500 pb-0.5 cursor-pointer hover:border-gray-500">
        {val}
      </span>
    ),
  },
  { key: "phone", label: "Phone" },
  { key: "email", label: "Email" },
  { key: "birthDate", label: "Birth Date" },
  {
    key: "company",
    label: "Department",
    render: (company) => (
      <span className="text-gray-500 font-medium border-gray-500 pb-0.5 cursor-pointer hover:border-gray-500">
        {company.department}
      </span>
    ),
  },
  {
    key: "role",
    label: "Role",
    render: (val: Role) => (
      <Badge className="capitalize" label={val} variant={ROLE_MAP[val]} />
    ),
  },
];

const Users = () => {
  const {
    searchQuery,
    page,
    skip,
    limit,
    totalPages,
    sortBy,
    order,
    handlePageChange,
    toggleSort,
    setTotalItems,
    updateSearch,
  } = useTableQueryState({
    defaultSortBy: "id",
  });
  const [searchInput, setSearchInput] = useState(searchQuery);
  const { data: users, isLoading } = useQuery<User[]>({
    queryKey: ["users", skip, limit, sortBy, order, searchQuery],
    queryFn: async () => {
      const res = await userService.getUsers({
        skip,
        limit,
        sortBy,
        order,
        searchQuery,
      });
      setTotalItems(res.total);
      return res.users;
    },
  });

  const debouncedSearch = useMemo(
    () =>
      debounce((value: string) => {
        updateSearch(value);
      }, 500),
    [],
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchInput(value);
    debouncedSearch(value);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <BackButton label="Users" />
        <Search searchQuery={searchInput} handleSearch={handleChange} />
      </div>
      <Card widthClass="w-full" heightClass="h-full" padding="p-4">
        {isLoading && !users ? (
          <TableSkeleton rows={10} columns={6} />
        ) : users ? (
          <DataTable<User>
            columns={columns}
            data={users}
            onSort={(key: string) => {
              toggleSort(key);
            }}
            noDataText="No users found."
          />
        ) : null}
        {users?.length && totalPages ? (
          <Pagination
            onPageChange={handlePageChange}
            pageCount={totalPages}
            selectedPage={page}
          />
        ) : null}
      </Card>
    </div>
  );
};

export default Users;
