import TableHeader from "./TableHeader";
import type { DataTableProps } from "./DataTable.types";

export function DataTable<T>({
  columns,
  data,
  onSort,
  noDataText = "No content found.",
}: DataTableProps<T>) {
  return (
    <div className="rounded-10 overflow-auto">
      <table className="w-full border-collapse">
        <thead className="bg-muted">
          <tr>
            {columns.map((col, colIndex) => (
              <TableHeader
                key={colIndex}
                columnKey={col.key as string}
                title={col.label}
                onSort={onSort}
              />
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {data?.length ? (
            data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="hover:bg-gray-100-transparent transition-colors"
              >
                {columns.map((col) => (
                  <td
                    key={col.key as string}
                    className="px-4 py-6 text-sm text-primary font-normal leading-5 text-center"
                  >
                    {col.render
                      ? col.render(row[col.key as keyof T], row)
                      : (row[col.key as keyof T] as React.ReactNode)}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns?.length}>
                <p className="flex justify-center items-center px-5 pt-10 pb-6">
                  {noDataText}
                </p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
