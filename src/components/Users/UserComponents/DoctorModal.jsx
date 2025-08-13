import React from 'react';

const DoctorModal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl w-[90%] max-w-md">
        <h2 className="text-center ext-xl font-semibold mb-4">{title}</h2>
        <div className="text-sm">{content}</div>
        <div className="flex justify-end mt-4">
          <button
            className="cursor-pointer px-4 py-2 bg-black text-white rounded "
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorModal;
