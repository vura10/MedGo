import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiPower } from "react-icons/fi";
import AppIcon from '/AppIcon-29_2x.png?url';
import { FaBars } from "react-icons/fa";

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const userName = "Bhogesh";
  const navigate = useNavigate();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [hovering, setHovering] = useState(false);

  const handleLogout = () => {
    setIsLoggingOut(true);
    setTimeout(() => navigate("/"), 500);
  };

  return (
    <nav className="w-full max-w-[100vw] bg-white shadow px-4 sm:px-6 py-2 flex justify-between items-center box-border">
      {/* Toggle button on small screens */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setIsSidebarOpen((prev) => !prev)}
          className="cursor-pointer lg:hidden text-gray-700 text-xl p-1"
        >
          <FaBars />
        </button>
        <img
          src={AppIcon}
          alt="Admin Logo"
          className="h-10 sm:h-12 w-auto max-w-[150px] sm:max-w-[200px]"
        />
      </div>

      <div className="flex items-center gap-3 sm:gap-4 relative max-w-[50%] sm:max-w-[40%]">
        <p className="text-sm sm:text-base text-gray-700 truncate">
          Welcome, <span className="font-semibold">{userName}</span>
        </p>
        <div
          className="relative"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <button
            onClick={handleLogout}
            className={`cursor-pointer text-red-500 hover:text-red-700 text-lg sm:text-xl transition-transform duration-500 ${
              isLoggingOut ? "rotate-180 scale-110" : ""
            }`}
          >
            <FiPower />
          </button>
          {hovering && (
            <div className="absolute top-8 sm:top-10 right-0 bg-gray-800 text-white text-xs sm:text-sm px-2 py-1 rounded shadow z-10">
              Logout
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
