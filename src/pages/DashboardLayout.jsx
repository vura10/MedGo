// src/pages/DashboardLayout.js
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/SideBar/Sidebar";
import { FaBars } from "react-icons/fa";
import clsx from "clsx";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Handle responsive sidebar toggle
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleResize = () => setIsSidebarOpen(!mediaQuery.matches);
    handleResize();
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <div className="flex flex-1 w-full">
        {/* Sidebar */}
        {isSidebarOpen && (
          <div className="z-30 fixed lg:static w-60 lg:w-auto">
            <Sidebar onClose={() => setIsSidebarOpen(false)} />
          </div>
        )}

        {/* Toggle Button - shown only when sidebar is closed and screen < lg */}
        {!isSidebarOpen && (
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="cursor-pointer absolute top-15 left-3 z-40 bg-white p-2 rounded shadow lg:hidden"
          >
            <FaBars size={15} />
          </button>
        )}

        {/* Main Content */}
        <main
          className={clsx(
            "flex-1 p-6 transition-all duration-300 w-full",
            isSidebarOpen && "lg:ml-10"
          )}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;