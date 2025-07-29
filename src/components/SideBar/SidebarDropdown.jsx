// src/components/SidebarDropdown.jsx
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import clsx from "clsx";

const SidebarDropdown = ({ title, icon: Icon, items }) => {
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
            <li key={i} className="justify-between items-center hover:bg-[var(--color-light)] transition-colors duration-200 ease-in-out p-2 rounded cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default SidebarDropdown;
