import React from 'react'
import DoctorTable from './UserComponents/DoctorTable'; 

const DoctorOnboarding =  () => {
  return (
    <div className="p-6">
      <h2 className="text-1xl font-bold mb-4">Doctor Onboarding Approval</h2>
      <DoctorTable />
    </div>
  );
};

export default DoctorOnboarding;