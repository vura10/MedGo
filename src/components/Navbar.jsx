import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiPower } from "react-icons/fi";
import AppIcon from '/AppIcon-29_2x.png?url'

const Navbar = () => {
  const userName = "Bhogesh";
  const navigate = useNavigate();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [hovering, setHovering] = useState(false);

  const handleLogout = () => {
    setIsLoggingOut(true);
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  return (
    <nav className="w-full bg-white shadow px-6 py-2 flex justify-between items-center">
      {/* <img
        src={AppIcon}
        alt="Admin Logo"
        className="h-12 w-auto"
      /> */}

      <div className="flex items-center gap-4 relative">
        <p className="text-gray-700">
          Welcome, <span className="font-semibold">{userName}</span>
        </p>

        {/* Logout Button with Hover Tooltip */}
        <div
          className="relative group"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <button
            onClick={handleLogout}
            className={`text-red-500 hover:text-red-700 text-xl transition-transform duration-500 ${
              isLoggingOut ? "rotate-180 scale-110" : ""
            }`}
          >
            <FiPower />
          </button>

          {/* Hover Text */}
          {hovering && (
            <div className="absolute -top--3 right-1 bg-dark text-white text-xs px-2 py-1 rounded shadow">
              Logout
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
