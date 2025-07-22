// src/admin/AdminDashboard.jsx
import React, { useEffect, useState } from "react";
// import axios from "axios";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalPrice: 0,
    nextDeliveryDate: "",
  });

  useEffect(() => {

    fetch("http://localhost:3000/api/admin/stats")
      .then(response => response.json())
      .then(data => {
        setStats(data);
      })
      .catch(error => {
        console.error("Error fetching admin stats:", error);
      });
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 shadow rounded-xl">
          <h2 className="text-lg font-semibold">Available Products</h2>
          <p className="text-xl">{stats.totalProducts}</p>
        </div>
        <div className="bg-white p-4 shadow rounded-xl">
          <h2 className="text-lg font-semibold">Ordered Items</h2>
          <p className="text-xl">{stats.totalOrders}</p>
        </div>
        <div className="bg-white p-4 shadow rounded-xl">
          <h2 className="text-lg font-semibold">Total Price</h2>
          <p className="text-xl">Rs. {stats.totalPrice}</p>
        </div>
        <div className="bg-white p-4 shadow rounded-xl">
          <h2 className="text-lg font-semibold">Next Delivery Date</h2>
          <p className="text-xl">{stats.nextDeliveryDate}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;