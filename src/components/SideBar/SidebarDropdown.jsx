import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import clsx from "clsx";

const SidebarDropdown = ({ title, icon: Icon, items, basePath, onSelectPath }) => {
  const [open, setOpen] = useState(false);

  return (
    <li>
      <div
        className="flex justify-between items-center hover:bg-[var(--color-light)] transition-colors duration-200 ease-in-out p-2 rounded cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-4">
          {Icon && <Icon />} {title}
        </div>
        <FiChevronDown
          className={clsx(
            "transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </div>
      {open && (
        <ul className="ml-6 mt-2 space-y-2 text-sm">
          {items.map((item, i) => (
            <li key={i}>
              <NavLink
                to={`${basePath}/${item.path}`}
                className={({ isActive }) =>
                  clsx(
                    "block justify-between items-center hover:bg-[var(--color-light)] transition-colors duration-200 ease-in-out p-2 rounded cursor-pointer",
                    isActive && "bg-[var(--color-light)] text-white"
                  )
                }

                onClick={() => {
                  if(typeof onSelectPath === "function") {
                    onSelectPath(title, item.name);
                  }
                }}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default SidebarDropdown;