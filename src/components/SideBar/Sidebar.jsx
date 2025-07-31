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
                  "flex items-center gap-2 hover:bg-blue-500 p-2 rounded",
                  isActive && "bg-blue-600"
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
