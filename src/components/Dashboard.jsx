import React, { useEffect, useState } from "react";
import StatCard from "../components/StatCard";
import {
  getTotalRevenue,
  getTotalEarnings,
  getTotalPatients,
  getTotalDoctors,
  getTotalDiscounts,
  getTotalConsultations,
} from "../Apis/statsApi";

const Dashboard = () => {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [revenue, earnings, discounts, consultations, doctors, patients] =
          await Promise.all([
            getTotalRevenue(),
            getTotalEarnings(),
            getTotalDiscounts(),
            getTotalConsultations(),
            getTotalDoctors(),
            getTotalPatients(),
          ]);

        setStats([
          { title: "Revenue", value: revenue },
          { title: "Earnings", value: earnings },
          { title: "Discounts", value: discounts },
          { title: "Consultations", value: consultations },
          { title: "Doctors", value: doctors },
          { title: "Patients", value: patients },
        ]);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching stats:", error.message);
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-sm sm:text-base md:text-lg text-gray-700 p-4 sm:p-6 md:p-8">
          Loading...
        </p>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 md:p-8 min-h-screen bg-gray-100">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
        Dashboard
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} title={stat.title} value={stat.value} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
