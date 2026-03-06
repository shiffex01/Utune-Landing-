import React, { useState } from "react";
import { FaPlay, FaPause, FaSearch } from "react-icons/fa";

const mockRequests = [
  { id: 1, title: "Golden Days", user: "0802395275", contact: "08123651735", amount: "₦100", status: "pending" },
  { id: 2, title: "Thunder", user: "0802395275", contact: "08123651735", amount: "₦100", status: "pending" },
  { id: 3, title: "Who Am I", user: "0802395275", contact: "08123651735", amount: "₦100", status: "approved" },
  { id: 4, title: "Happiest Day", user: "0802395275", contact: "08123651735", amount: "₦100", status: "declined" },
];

const statusColors = {
  pending: "bg-yellow-300 text-yellow-800",
  approved: "bg-green-300 text-green-800",
  declined: "bg-red-300 text-red-800",
};

const TuneActivationRequests = () => {
  const [requests, setRequests] = useState(mockRequests);
  const [filter, setFilter] = useState("all");
  const [confirmModal, setConfirmModal] = useState({ visible: false, action: null, id: null });
  const [search, setSearch] = useState("");

  const handleApprove = (id) => setRequests((prev) => prev.map((r) => (r.id === id ? { ...r, status: "approved" } : r)));
  const handleDecline = (id) => setRequests((prev) => prev.map((r) => (r.id === id ? { ...r, status: "declined" } : r)));

  const filteredRequests = requests
    .filter((r) => filter === "all" || r.status === filter)
    .filter((r) => r.title.toLowerCase().includes(search.toLowerCase()) || r.user.includes(search));

  const counts = {
    all: requests.length,
    pending: requests.filter((r) => r.status === "pending").length,
    approved: requests.filter((r) => r.status === "approved").length,
    declined: requests.filter((r) => r.status === "declined").length,
  };

  return (
    <div className="flex-1">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {["all", "pending", "approved", "declined"].map((type) => (
          <div key={type} className="flex items-center justify-between p-4 bg-white rounded-xl shadow">
            <div>
              <p className="font-bold text-gray-600 capitalize">{type}</p>
              <p className="text-xl font-bold">{counts[type]}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Filters & Search */}
      <div className="bg-white p-4 rounded-xl mb-4">
        <div className="flex flex-col lg:flex-row lg:items-center gap-3">
          {["all", "pending", "approved", "declined"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1 rounded-full cursor-pointer font-medium ${filter === f ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"}`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
          <div className="flex items-center gap-3 bg-gray-200 p-3 rounded-xl w-full">
            <FaSearch className="text-gray-600" />
            <input
              type="text"
              placeholder="Search by title or phone..."
              className="bg-transparent outline-none w-full text-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Request Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredRequests.map((req) => (
          <div
            key={req.id}
            className={`relative bg-white p-4 rounded-xl shadow border ${
              req.status === "pending" ? "border-yellow-300" : req.status === "approved" ? "border-green-300" : "border-red-300"
            }`}
          >
            <span className={`absolute top-2 right-2 px-2 py-1 text-xs font-bold rounded-full ${statusColors[req.status]}`}>
              {req.status.toUpperCase()}
            </span>
            <h3 className="font-bold text-lg mb-1">{req.title}</h3>
            <p className="text-sm text-gray-800">User: <span className="font-bold">{req.user}</span></p>
            <p className="text-sm text-gray-800">Contact: <span className="font-bold">{req.contact}</span></p>
            <p className="text-sm text-gray-800 mb-3">Amount: <span className="font-bold text-blue-900">{req.amount}</span></p>

            {req.status === "pending" && (
              <div className="flex space-x-2">
                <button
                  onClick={() => setConfirmModal({ visible: true, action: "approve", id: req.id })}
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-md text-sm"
                >
                  Approve
                </button>
                <button
                  onClick={() => setConfirmModal({ visible: true, action: "decline", id: req.id })}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-md text-sm"
                >
                  Decline
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Confirm Modal */}
      {confirmModal.visible && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-80 shadow-2xl">
            <h2 className="font-bold text-lg mb-2 capitalize">{confirmModal.action} Request</h2>
            <p className="text-gray-600 mb-4">Are you sure you want to {confirmModal.action} this request?</p>
            <div className="flex justify-center gap-3">
              <button
                className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm"
                onClick={() => {
                  confirmModal.action === "approve" ? handleApprove(confirmModal.id) : handleDecline(confirmModal.id);
                  setConfirmModal({ visible: false, action: null, id: null });
                }}
              >
                Confirm
              </button>
              <button
                className="bg-gray-300 px-4 py-2 rounded-lg text-sm"
                onClick={() => setConfirmModal({ visible: false, action: null, id: null })}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TuneActivationRequests;
