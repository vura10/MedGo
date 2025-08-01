import sidebarItems from "../../data/sidebarItems";
import SidebarDropdown from "./SidebarDropdown";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

const Sidebar = () => {
  return (
    <aside className="w-60 bg-primary text-white min-h-screen p-4">
      <ul className="space-y-4">
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
