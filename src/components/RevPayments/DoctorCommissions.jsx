import React, { useEffect, useState } from "react";
import { getDoctorCommissions } from "../../Apis/revenues";

const DoctorCommissions = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchId, setSearchId] = useState("");
  const [searchPhone, setSearchPhone] = useState("");
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    async function loadData() {
      try {
        const result = await getDoctorCommissions();
        const transformed = result.map((item) => ({
          id: item.doctor_details.doctor_id,
          phone: item.doctor_details.doctor_phonenumber,
          name: item.doctor_details.doctor_name,
          commissionRate: item.commission_details.commission_rate,
          specialCommissionRate:
            item.commission_details.special_commission_rate,
        }));
        setDoctors(transformed);
      } catch (error) {
        console.error("Error loading doctor commissions: ", error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const filteredDoctors = doctors.filter(
    (doc) =>
      doc.id.toString().includes(searchId) &&
      doc.phone.toLowerCase().includes(searchPhone.toLowerCase()) &&
      doc.name.toLowerCase().includes(searchName.toLowerCase())
  );

  const highlightText = (text, search) => {
    if (!search) return text;
    const regex = new RegExp(`(${search})`, "gi");
    return text.split(regex).map((part, index) =>
      part.toLowerCase() === search.toLowerCase() ? (
        <span key={index} className="bg-yellow-300 font-semibold">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const openModal = (doctor) => {
    setSelectedDoctor(doctor);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedDoctor(null);
    setIsModalOpen(false);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    alert(`Commission updated for ${selectedDoctor.name}`);
    closeModal();
  };

  if (loading) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-4 md:p-6 w-full">
      <h2 className="text-2xl font-bold mb-4 text-black">Doctor Commissions</h2>

      <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
        <table className="min-w-full bg-white rounded-lg">
          <thead>
            <tr className="bg-primary text-white">
              <th className="px-4 py-3 text-left">Doc ID</th>
              <th className="px-4 py-3 text-left">Phone Number</th>
              <th className="px-4 py-3 text-left">Doc Name</th>
              <th className="px-4 py-3 text-left">Commission Rate</th>
              <th className="px-4 py-3 text-left">Special Commission Rate</th>
              <th className="px-4 py-3 text-left">Action</th>
            </tr>
            {/* Search Row */}
            <tr className="bg-gray-50">
              <th className="px-4 py-2">
                <input
                  type="text"
                  placeholder="Search ID"
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
                  className="border text-sm border-gray-300 rounded px-2 py-1 w-full"
                />
              </th>
              <th className="px-4 py-2">
                <input
                  type="text"
                  placeholder="Search Phone"
                  value={searchPhone}
                  onChange={(e) => setSearchPhone(e.target.value)}
                  className="border text-sm border-gray-300 rounded px-2 py-1 w-full"
                />
              </th>
              <th className="px-4 py-2">
                <input
                  type="text"
                  placeholder="Search Name"
                  value={searchName}
                  onChange={(e) => setSearchName(e.target.value)}
                  className="text-sm border border-gray-300 rounded px-2 py-1 w-full"
                />
              </th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody className="text-dark">
            {filteredDoctors.map((doc) => (
              <tr
                key={doc.id}
                className="hover:bg-gray-100 transition duration-200"
              >
                <td className="px-4 py-3">
                  {highlightText(doc.id.toString(), searchId)}
                </td>
                <td className="px-4 py-3">
                  {highlightText(doc.phone, searchPhone)}
                </td>
                <td className="px-4 py-3">
                  {highlightText(doc.name, searchName)}
                </td>
                <td className="px-4 py-3">{doc.commissionRate}</td>
                <td className="px-4 py-3">{doc.specialCommissionRate}</td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => openModal(doc)}
                    className="cursor-pointer btn-primary text-sm"
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && selectedDoctor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
            <div className="bg-primary flex justify-between items-center rounded-sm p-4">
              <h3 className="text-lg font-semibold text-white">
                Update Commission
              </h3>
              <button
                onClick={closeModal}
                className="cursor-pointer text-white text-3xl hover:text-red-700"
              >
                &times;
              </button>
            </div>
            <div className="p-6">
              <form onSubmit={handleUpdate} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Commission Rate
                  </label>
                  <input
                    type="text"
                    defaultValue={selectedDoctor.commissionRate}
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Special Commission Rate
                  </label>
                  <input
                    type="text"
                    defaultValue={selectedDoctor.specialCommissionRate}
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                  />
                </div>
                <div className="flex justify-end space-x-2">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-primary text-white rounded hover:bg-blue-600"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorCommissions;
