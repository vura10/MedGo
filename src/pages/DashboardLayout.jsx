import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import Sidebar from "../components/SideBar/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <Dashboard />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
