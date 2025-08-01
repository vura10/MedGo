import React from 'react'
import DoctorTable from '../UserComponents/DoctorTable';

const DoctorOnboarding =  () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Doctor Onboarding Approval</h1>
      <DoctorTable />
    </div>
  );
};

export default DoctorOnboarding;