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
    <div className="min-h-screen bg-gray-100 flex flex-col w-full max-w-[100vw] overflow-x-hidden box-border">
  <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

  <div className="flex flex-1">
    {isSidebarOpen && (
      <div className="fixed lg:static top-0 left-0 z-40">
        <Sidebar onClose={() => setIsSidebarOpen(false)} />
      </div>
    )}
    <main
      className={clsx(
        "flex-1 p-4 sm:p-6 md:p-1 transition-all duration-300",
        isSidebarOpen ? "lg:ml-2" : "ml-0"
      )}
    >
      <Outlet />
    </main>
  </div>
</div>
  );
};

export default DashboardLayout;