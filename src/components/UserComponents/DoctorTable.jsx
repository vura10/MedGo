import React, { useState, useEffect } from 'react';
import { mockDoctors } from '../../data/mockDoctors'; 
import DoctorModal from './DoctorModal';

const DoctorTable = () => {
  const [filters, setFilters] = useState({ mobile: '', name: '', city: '' });
  const [modalData, setModalData] = useState({ open: false, title: '', content: '' });

  const [doctors, setDoctors] = useState([]);

  // In future, fetch doctor list from backend API here
  useEffect(() => {
    // Uncomment and update the below function to fetch from backend
    /*
    const fetchDoctorsFromAPI = async () => {
      try {
        const response = await fetch('https://your-api.com/doctors');
        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctorsFromAPI();
    */
    
    // Temporary: Using local mock data for now
    setDoctors(mockDoctors);
  }, []);

  const handleSearchChange = (field, value) => {
    setFilters({ ...filters, [field]: value });
  };

  const filteredDoctors = doctors.filter((doc) =>
    doc.mobile.includes(filters.mobile) &&
    doc.name.toLowerCase().includes(filters.name.toLowerCase()) &&
    doc.city.toLowerCase().includes(filters.city.toLowerCase())
  );

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow p-4 mt-4">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr className="bg-gray-100 text-sm text-gray-600 text-left">
            <th className="px-4 py-2">Doc Mobile Num</th>
            <th className="px-4 py-2">Doc Name</th>
            <th className="px-4 py-2">Doc Verification Status</th>
            <th className="px-4 py-2">City</th>
            <th className="px-4 py-2">Action</th>
          </tr>
          <tr className="bg-white text-sm">
            <th className="px-4 py-2">
              <input
                type="text"
                placeholder="Search Mobile"
                className="w-full border border-gray-300 rounded px-2 py-1"
                value={filters.mobile}
                onChange={(e) => handleSearchChange('mobile', e.target.value)}
              />
            </th>
            <th className="px-4 py-2">
              <input
                type="text"
                placeholder="Search Name"
                className="w-full border border-gray-300 rounded px-2 py-1"
                value={filters.name}
                onChange={(e) => handleSearchChange('name', e.target.value)}
              />
            </th>
            <th></th>
            <th className="px-4 py-2">
              <input
                type="text"
                placeholder="Search City"
                className="w-full border border-gray-300 rounded px-2 py-1"
                value={filters.city}
                onChange={(e) => handleSearchChange('city', e.target.value)}
              />
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody className="text-sm text-gray-800">
          {filteredDoctors.length === 0 ? (
            <tr>
              <td colSpan="5" className="px-4 py-6 text-center text-gray-500">
                No matching doctors found.
              </td>
            </tr>
          ) : (
            filteredDoctors.map((doc) => (
              <tr key={doc.id} className="hover:bg-gray-50">
                <td className="px-4 py-2">{doc.mobile}</td>
                <td className="px-4 py-2">{doc.name}</td>
                <td className="px-4 py-2">{doc.status}</td>
                <td className="px-4 py-2">{doc.city}</td>
                <td className="px-4 py-2 space-x-2">
                  <button
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                    onClick={() =>
                      setModalData({
                        open: true,
                        title: 'Onboard Doctor',
                        content: `Do you want to onboard ${doc.name}?`,
                      })
                    }
                  >
                    Onboard
                  </button>
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    onClick={() =>
                      setModalData({
                        open: true,
                        title: 'Doctor Details',
                        content: (
                          <div>
                            <p><strong>Name:</strong> {doc.name}</p>
                            <p><strong>Mobile:</strong> {doc.mobile}</p>
                            <p><strong>Status:</strong> {doc.status}</p>
                            <p><strong>City:</strong> {doc.city}</p>
                          </div>
                        ),
                      })
                    }
                  >
                    View
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <DoctorModal
        isOpen={modalData.open}
        title={modalData.title}
        content={modalData.content}
        onClose={() => setModalData({ ...modalData, open: false })}
      />
    </div>
  );
};

export default DoctorTable;
