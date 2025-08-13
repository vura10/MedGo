import React, { useState } from "react";
import { docPayoutData } from "../../data/docPayoutData";

const DocPayout = () => {
  const [statusFilter, setStatusFilter] = useState("Pending");
  const [selectedRows, setSelectedRows] = useState([]);
  const [columnSearch, setColumnSearch] = useState({
    docId: "",
    docName: "",
    docMobile: "",
    consultationId: "",
    payoutStatus: "",
  });

  // Toggle row selection
  const toggleRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]
    );
  };

  // Apply filters
  const filteredData = docPayoutData
    .filter((row) => statusFilter === "All" || row.payoutStatus === statusFilter)
    .filter((row) =>
      Object.keys(columnSearch).every((key) => {
        if (!columnSearch[key]) return true;
        return row[key].toLowerCase().includes(columnSearch[key].toLowerCase());
      })
    );

  return (
    <div className="p-3 sm:p-6 md:p-8 min-h-screen bg-gray-100">
      {/* Page Title */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
        Doctor Payouts
      </h1>

      {/* Filter Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 bg-white p-4 rounded-lg shadow-md">
        <label className="font-semibold text-gray-700">Select Pending Status:</label>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="cursor-pointer border border-gray-300 rounded p-2 w-full sm:w-auto focus:outline-none focus:ring-1 "
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Settled">Settled</option>
        </select>
      </div>

      {/* Table Container */}
      <div className="bg-white p-4 rounded-xl shadow-lg overflow-x-auto">
  <table className="w-full table-auto border-separate border-spacing-0 text-xs sm:text-sm">
    <thead>
      <tr className="bg-primary text-white text-xs">
        <th className="px-1 py-1 sm:px-2 sm:py-2 text-left">Check</th>
        <th className="px-1 py-1 sm:px-2 sm:py-2 text-left">Doctor Id</th>
        <th className="px-1 py-1 sm:px-2 sm:py-2 text-left">Doctor Mobile</th>
        <th className="px-1 py-1 sm:px-2 sm:py-2 text-left">Doctor Name</th>
        <th className="px-1 py-1 sm:px-2 sm:py-2 text-left">Consultation Id</th>
        <th className="px-1 py-1 sm:px-2 sm:py-2 text-left">Consultation Amount</th>
        <th className="px-1 py-1 sm:px-2 sm:py-2 text-left">Doctor Earnings</th>
        <th className="px-1 py-1 sm:px-2 sm:py-2 text-left">Payout Status</th>
        <th className="px-1 py-1 sm:px-2 sm:py-2 text-left">Transaction Time</th>
        <th className="px-1 py-1 sm:px-2 sm:py-2 text-left">Payout Date</th>
      </tr>
      <tr>
  <th className="p-1"></th>

  {/* Doctor Id Search */}
  <th className="p-1">
    <input
      type="text"
      placeholder="Search Id"
      value={columnSearch.docId}
      onChange={(e) => setColumnSearch({ ...columnSearch, docId: e.target.value })}
      className="border border-gray-300 text-xs rounded p-1 w-full focus:outline-none focus:ring-1"
    />
  </th>

  {/* Doctor Mobile (leave empty if you don't want search here yet) */}
  <th className="p-1"></th>

  {/* Doctor Name Search */}
  <th className="p-1">
    <input
      type="text"
      placeholder="Search Name"
      value={columnSearch.docName}
      onChange={(e) => setColumnSearch({ ...columnSearch, docName: e.target.value })}
      className="border border-gray-300 text-xs rounded p-1 w-full focus:outline-none focus:ring-1"
    />
  </th>

  {/* Consultation Id Search */}
  <th className="p-1">
    <input
      type="text"
      placeholder="Search Consultation"
      value={columnSearch.consultationId}
      onChange={(e) =>
        setColumnSearch({ ...columnSearch, consultationId: e.target.value })
      }
      className="border border-gray-300 text-xs rounded p-1 w-full focus:outline-none focus:ring-1"
    />
  </th>

  {/* Keep other columns empty */}
  <th className="p-1"></th>
  <th className="p-1"></th>

  {/* Payout Status Search */}
  <th className="p-1">
    <input
      type="text"
      placeholder="Search Status"
      value={columnSearch.payoutStatus}
      onChange={(e) =>
        setColumnSearch({ ...columnSearch, payoutStatus: e.target.value })
      }
      className="border border-gray-300 text-xs rounded p-1 w-full focus:outline-none focus:ring-1"
    />
  </th>

  <th className="p-1"></th>
  <th className="p-1"></th>
</tr>

    </thead>
    <tbody>
      {filteredData.map((row) => (
        <tr key={row.id} className="hover:bg-gray-100 transition-colors duration-200">
          <td className="p-1 text-center">
            <input
              type="checkbox"
              checked={selectedRows.includes(row.id)}
              onChange={() => toggleRow(row.id)}
              className="cursor-pointer"
            />
          </td>
          <td className="p-1">{row.docId}</td>
          <td className="p-1">{row.docMobile}</td>
          <td className="p-1">{row.docName}</td>
          <td className="p-1">{row.consultationId}</td>
          <td className="p-1">{row.consultationAmount}</td>
          <td className="p-1">{row.docEarnings}</td>
          <td className="p-1">{row.payoutStatus}</td>
          <td className="p-1">{row.transactionTime}</td>
          <td className="p-1">{row.docPayoutDate}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
    </div>
  );
};

export default DocPayout;