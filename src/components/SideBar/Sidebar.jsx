// src/components/SideBar/Sidebar.jsx
import sidebarItems from "../../data/sidebarItems";
import SidebarDropdown from "./SidebarDropdown";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { FaTimes } from "react-icons/fa";

const Sidebar = ({ onClose }) => {
  // Check if the screen is mobile (≤768px)
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  return (
    <aside className="w-60 bg-primary text-white min-h-screen p-4 shadow-md relative lg:relative lg:block">
      {/* Close button for small screens */}
      <div className="flex justify-end lg:hidden">
        <button onClick={onClose} className="text-white text-lg p-2 cursor-pointer">
          <FaTimes />
        </button>
      </div>

      <ul className="space-y-4 mt-2">
        {sidebarItems.map((item, index) =>
          item.type === "link" ? (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                clsx(
                  "flex gap-4 items-center hover:bg-[var(--color-light)] transition-colors duration-200 ease-in-out p-2 rounded cursor-pointer",
                  isActive && "bg-primary"
                )
              }
              onClick={() => isMobile && onClose()} // Only close on mobile
            >
              {item.icon && <item.icon />} {item.title}
            </NavLink>
          ) : (
            <SidebarDropdown
              key={index}
              title={item.title}
              icon={item.icon}
              items={item.items}
              basePath={item.basePath}
            />
          )
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;