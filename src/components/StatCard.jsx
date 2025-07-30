import React, { useEffect, useState } from 'react';
import {
  FaMoneyBillWave,
  FaChartLine,
  FaTags,
  FaStethoscope,
  FaUserMd,
  FaUsers,
} from 'react-icons/fa';

const iconMap = {
  Revenue: <FaMoneyBillWave className="text-3xl text-white" />,
  Earnings: <FaChartLine className="text-3xl text-white" />,
  Discounts: <FaTags className="text-3xl text-white" />,
  Consultations: <FaStethoscope className="text-3xl text-white" />,
  Doctors: <FaUserMd className="text-3xl text-white" />,
  Patients: <FaUsers className="text-3xl text-white" />,
};

const isCurrency = (title) =>
  ['Revenue', 'Earnings', 'Discounts'].includes(title);

const formatRupees = (amount) => {
  return `\u20B9 ${amount.toLocaleString('en-IN')}`;
};

const StatCard = ({ title, value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const end = parseInt(value);
    let start = 0;

    const duration = 700; 
    const frameRate = 25; 
    const totalFrames = Math.round((duration / 1000) * frameRate);
    const increment = Math.ceil(end / totalFrames);

    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 900 / frameRate); 

    return () => clearInterval(interval);
  }, [value]);

  const displayValue = isCurrency(title)
    ? formatRupees(count)
    : count.toLocaleString('en-IN');

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex justify-between items-center hover:shadow-lg transition-transform hover:scale-[1.02] cursor-pointer">
      <div>
        <p className="text-lg text-gray-500 font-medium">{title}</p>
        <h3 className="text-2xl font-bold text-gray-700 mt-1">{displayValue}</h3>
      </div>
      <div className="bg-primary rounded-full p-3 flex items-center justify-center">
        {iconMap[title]}
      </div>
    </div>
  );
};

export default StatCard;
