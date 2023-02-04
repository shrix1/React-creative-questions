import React, { useMemo, useState } from "react";
import { useTable } from "react-table";

// type dataProps = {
//   id: number;
//   username: String;
//   name: String;
//   email: String;
// };

// type colProps = {
//   Header: String;
//   accessor: String;
// };

const Table = () => {
  const [data, setData] = useState([]);

  useMemo(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const columns: any = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "username",
        accessor: "username",
      },
      {
        Header: "name",
        accessor: "name",
      },
      {
        Header: "email",
        accessor: "email",
      },
      {
        Header: "website",
        accessor: "website",
      },
      {
        Header: "PhoneNO",
        accessor: "phone",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="text-xl flex justify-center items-center p-2">
      <table className="border-2 border-black" {...getTableProps()}>
        <thead className="border-2 border-black">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  className="border-2 border-black p-2"
                  {...column.getHeaderProps()}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="border-2 border-black" {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr className="border-2 border-black" {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      className="border-2 border-black p-2"
                      {...cell.getCellProps()}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
