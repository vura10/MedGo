import React from 'react';
import StatCard from '../components/StatCard';

const Dashboard = () => {
  const stats = [
    { title: 'Revenue', value: 12000 },
    { title: 'Earnings', value: 8450 },
    { title: 'Discounts', value: 1200 },
    { title: 'Consultations', value: 340 },
    { title: 'Doctors', value: 25 },
    { title: 'Patients', value: 980 },
  ];

  return (
    <div className="p-7">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} title={stat.title} value={stat.value} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
