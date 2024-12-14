import React, { useMemo } from "react";
import { useTable, usePagination } from "react-table";

const AdminTable = () => {
  // Sample JSON data for the table
  const tableData = useMemo(
    () => [
      { name: "Tiger Nixon", position: "System Architect", office: "Edinburgh", age: 61, startDate: "2011/04/25" },
      { name: "Garrett Winters", position: "Accountant", office: "Tokyo", age: 63, startDate: "2011/07/25" },
      { name: "Ashton Cox", position: "Junior Technical Author", office: "San Francisco", age: 66, startDate: "2009/01/12" },
      { name: "Cedric Kelly", position: "Senior Javascript Developer", office: "Edinburgh", age: 22, startDate: "2012/03/29" },
      { name: "Airi Satou", position: "Accountant", office: "Tokyo", age: 33, startDate: "2008/11/28" },
      { name: "Brielle Williamson", position: "Integration Specialist", office: "New York", age: 61, startDate: "2012/12/02" },
      { name: "Herrod Chandler", position: "Sales Assistant", office: "San Francisco", age: 59, startDate: "2012/08/06" },
      { name: "Rhona Davidson", position: "Integration Specialist", office: "Tokyo", age: 55, startDate: "2010/10/14" },
      { name: "Colleen Hurst", position: "Javascript Developer", office: "San Francisco", age: 39, startDate: "2009/09/15" },
      { name: "Sonya Frost", position: "Software Engineer", office: "Edinburgh", age: 23, startDate: "2008/12/13" },
      { name: "Jena Gaines", position: "Office Manager", office: "London", age: 30, startDate: "2008/12/19" },
    ],
    []
  );

  const columns = useMemo(
    () => [
      { Header: "Name", accessor: "name" },
      { Header: "Position", accessor: "position" },
      { Header: "Test-Type", accessor: "office" },
      { Header: "Results", accessor: "age" },
      { Header: "Test-Date", accessor: "startDate" },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data: tableData,
      initialState: { pageIndex: 0, pageSize: 10 }, // Default to 10 rows per page
    },
    usePagination
  );

  return (
    <div className="p-0 container mx-auto">
      <div className="shadow rounded overflow-hidden">
        <div className="px-4 py-3 border-b bg-gray-50">
          <div className="text-lg font-medium text-center">
            Candidate Data Table
          </div>
        </div>
        <div className="p-4">
          <table
            {...getTableProps()}
            className="w-full border-collapse"
          >
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps()}
                      className="border border-gray-200 px-4 py-2 text-left"
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td
                        {...cell.getCellProps()}
                        className="border border-gray-200 px-4 py-2"
                      >
                        {cell.render("Cell")}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="flex flex-wrap items-center justify-between mt-4">
            <div className="flex items-center space-x-2">
              <span>
                Page <strong>{pageIndex + 1}</strong> of{" "}
                <strong>{pageOptions.length}</strong>
              </span>
              <label className="flex items-center space-x-2">
                <span>Show:</span>
                <select
                  className="form-select border-gray-300 rounded p-1"
                  value={pageSize}
                  onChange={(e) => setPageSize(Number(e.target.value))}
                >
                  {[10, 20, 30, 40, 50].map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex items-center space-x-2">
                <span>Go to page:</span>
                <input
                  type="number"
                  className="w-16 border border-gray-300 rounded p-1"
                  defaultValue={pageIndex + 1}
                  onChange={(e) => {
                    const pageNumber = e.target.value
                      ? Number(e.target.value) - 1
                      : 0;
                    gotoPage(pageNumber);
                  }}
                />
              </label>
            </div>
            <ul className="flex space-x-1">
              <li>
                <button
                  onClick={() => gotoPage(0)}
                  disabled={!canPreviousPage}
                  className={`px-3 py-1 ${
                    canPreviousPage
                      ? "bg-gray-100 hover:bg-gray-200"
                      : "text-gray-400 cursor-not-allowed"
                  }`}
                >
                  &laquo;
                </button>
              </li>
              <li>
                <button
                  onClick={() => previousPage()}
                  disabled={!canPreviousPage}
                  className={`px-3 py-1 ${
                    canPreviousPage
                      ? "bg-gray-100 hover:bg-gray-200"
                      : "text-gray-400 cursor-not-allowed"
                  }`}
                >
                  &lsaquo;
                </button>
              </li>
              <li>
                <button
                  onClick={() => nextPage()}
                  disabled={!canNextPage}
                  className={`px-3 py-1 ${
                    canNextPage
                      ? "bg-gray-100 hover:bg-gray-200"
                      : "text-gray-400 cursor-not-allowed"
                  }`}
                >
                  &rsaquo;
                </button>
              </li>
              <li>
                <button
                  onClick={() => gotoPage(pageOptions.length - 1)}
                  disabled={!canNextPage}
                  className={`px-3 py-1 ${
                    canNextPage
                      ? "bg-gray-100 hover:bg-gray-200"
                      : "text-gray-400 cursor-not-allowed"
                  }`}
                >
                  &raquo;
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTable;
