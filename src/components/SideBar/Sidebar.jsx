// src/components/Sidebar.jsx
import SidebarDropdown from "./SidebarDropdown";
import sidebarItems from "../../data/sidebarItems";

const Sidebar = () => {
  return (
    <aside className="w-60 bg-primary text-white min-h-screen p-4">
      <ul className="space-y-4">
        {sidebarItems.map((item, index) =>
          item.type === "link" ? (
            <li
              key={index}
              className="flex items-center gap-2 hover:bg-blue-500 p-2 rounded cursor-pointer"
            >
              {item.icon && <item.icon />} {item.title}
            </li>
          ) : (
            <SidebarDropdown
              key={index}
              title={item.title}
              icon={item.icon}
              items={item.items}
            />
          )
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;
