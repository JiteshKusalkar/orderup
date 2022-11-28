import { Column, useTable } from "react-table";
import { twMerge } from "tailwind-merge";
import styles from "./table.module.css";

export interface TableProps<Data extends object> {
  columns: ReadonlyArray<Column<Data>>;
  data: Data[];
  noDataPlaceholder?: string;
}

function Table<Data extends object>({ columns, data }: TableProps<Data>) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <div {...getTableProps()} className={styles.table} role="table">
      <div className={styles.rowGroup} role="rowgroup">
        {headerGroups.map((headerGroup) => (
          <div
            {...headerGroup.getHeaderGroupProps()}
            role="row"
            className={twMerge(styles.rowHead, "font-bold")}
          >
            {headerGroup.headers.map((column) => (
              <div
                {...column.getHeaderProps()}
                role="columnheader"
                className="p-3"
                style={{
                  width: column.width,
                  maxWidth: column.maxWidth,
                  minWidth: column.minWidth,
                  flex: `${column.width || column.maxWidth} 0`,
                }}
              >
                {column.render("Header")}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div
        {...getTableBodyProps()}
        role="rowgroup"
        className={styles.rowGroup}
      >
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <div
              {...row.getRowProps()}
              role="row"
              className={styles.row}
            >
              {row.cells.map((cell) => {
                return (
                  <div
                    {...cell.getCellProps()}
                    role="cell"
                    className="p-4"
                    style={{
                      width: cell.column.width,
                      maxWidth: cell.column.maxWidth,
                      minWidth: cell.column.minWidth,
                      flex: `${cell.column.width || cell.column.maxWidth} 0`,
                    }}
                  >
                    {cell.render("Cell")}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Table;
