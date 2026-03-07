import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ManageAdmins = () => {
  const [admins, setAdmins] = useState([
    { id: 1, name: "John Doe", email: "admin1@utune.com" },
    { id: 2, name: "Jane Smith", email: "admin2@utune.com" }
  ]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem("adminsAuth");

    if (!isAdmin) {
      navigate("/admins/login");
    }
  }, []);

  const handleAdd = () => {
    if (!name || !email) return;

    const newAdmin = {
      id: Date.now(),
      name,
      email
    };

    setAdmins([...admins, newAdmin]);

    setName("");
    setEmail("");
  };

  const handleRemove = (id) => {
    setAdmins(admins.filter((admin) => admin.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600/10 to-pink-500/10 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">

          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Manage
            <span className="block text-4xl md:text-5xl mt-2 bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">
              Admin Accounts
            </span>
          </h1>

          <p className="text-gray-600 max-w-xl mx-auto">
            Add or remove administrators who can manage requests and approve uploaded tunes.
          </p>

        </div>
      </div>

      {/* Main Card */}
      <div className="px-6 py-10 flex justify-center">

        <div className="bg-white w-full max-w-3xl rounded-2xl shadow-lg p-6 md:p-8">

          {/* Top Row */}
          <div className="flex items-center justify-between mb-6">

            <h2 className="text-xl font-semibold text-gray-800">
              Current Admins
            </h2>

            <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full font-semibold">
              {admins.length} Admins
            </span>

          </div>

          {/* Add Admin */}
          <div className="flex flex-col gap-3 mb-8">

            <input
              type="text"
              placeholder="Enter admin name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
            />

            <div className="flex flex-col sm:flex-row gap-3">

              <input
                type="email"
                placeholder="Enter admin email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
              />

              <button
                onClick={handleAdd}
                className="bg-gradient-to-r from-blue-600 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Add Admin
              </button>

            </div>

          </div>

          {/* Admin List */}
          <div className="space-y-4">

            {admins.map((admin) => (
              <div
                key={admin.id}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 hover:shadow-md transition"
              >

                <div className="flex items-center gap-3">

                  <div className="w-9 h-9 rounded-full bg-gradient-to-r from-blue-600 to-pink-500 text-white flex items-center justify-center text-sm font-semibold">
                    {admin.name.charAt(0).toUpperCase()}
                  </div>

                  <div className="flex flex-col">

                    <span className="font-semibold text-gray-800">
                      {admin.name}
                    </span>

                    <span className="text-sm text-gray-500 break-all">
                      {admin.email}
                    </span>

                  </div>

                </div>

                <button
                  onClick={() => handleRemove(admin.id)}
                  className="bg-red-500 text-white px-4 py-1.5 rounded-md text-sm hover:bg-red-600 transition w-full sm:w-auto"
                >
                  Remove
                </button>

              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
};

export default ManageAdmins;