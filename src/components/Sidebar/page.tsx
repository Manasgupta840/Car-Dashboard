import MenuItem from "../MenuItem/MenuItem";

const Sidebar = () => {
  const menuOptions = [
    {
      label: "Dashboard",
      icon: "/speedometer-icon.svg",
    },
    {
      label: "Stations",
      icon: "/gas-station-icon.svg",
    },
    {
      label: "Favorites",
      icon: "/heart-thin-icon.svg",
    },
    {
      label: "Radio",
      icon: "/radio-icon.svg",
    },
    {
      label: "Settings",
      icon: "/setting.svg",
    },
  ];
  return (
    <div className="container w-[15.625rem] pl-12 pt-16 h-screen bg-[#37B3E2] left-0 rounded-[2rem]">
      <aside className="grid row-span-1 gap-2 ">
        {menuOptions.map((menu) => (
          <MenuItem label={menu.label} icon={menu.icon} />
        ))}
      </aside>
    </div>
  );
};
export default Sidebar;
