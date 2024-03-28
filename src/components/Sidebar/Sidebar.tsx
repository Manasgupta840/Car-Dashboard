import Image from "next/image";
import MenuItem from "../MenuItem/MenuItem";

const Sidebar = () => {
  const menuOptions = [
    {
      label: "Dashboard",
      inActiveIcon: "/speedometer-icon.svg",
      activeIcon: "/speedometer-icon-black.svg",
      path: "/"
    },
    {
      label: "Stations",
      inActiveIcon: "/gas-station-icon.svg",
      activeIcon: "/gas-station-icon-black.svg",
      path:"/stations"
    },
    {
      label: "Favorites",
      inActiveIcon: "/heart-thin-icon.svg",
      activeIcon: "/heart-thin-icon-black.svg",
      path:"/favorites"
    },
    {
      label: "Radio",
      inActiveIcon: "/radio-icon.svg",
      activeIcon: "/radio-icon-black.svg",
      path:"/radio"
    },
    {
      label: "Settings",
      inActiveIcon: "/setting.svg",
      activeIcon: "/setting-black.svg",
      path:"/settings"
    },
  ];
  return (
    <div className="bg-[#F0F0F0] w-full h-full min-h-screen fixed top-0">
      <div className="container flex flex-col justify-between w-[15.625rem] pt-10 h-screen bg-[#37B3E2] fixed -left-6 top-0 z-50 rounded-[2rem]">
        <div>
          <div className="flex gap-2 w-full items-center justify-center">
            <Image width={37} height={37} src="/logo.svg" alt="logo" />
            <span className="font-serif text-white font-medium text-2xl">
              SM-Infinity
            </span>
          </div>
          <aside className="grid row-span-1 gap-2 pl-9 mt-12 ">
            {menuOptions.map((menu, index) => (
              <MenuItem
                key={index}
                label={menu.label}
                activeIcon={menu.activeIcon}
                inActiveIcon={menu.inActiveIcon}
                path={menu.path}
              />
            ))}
          </aside>
        </div>
        <div className="mb-10 relative flex gap-7 items-center justify-center mr-9 cursor-pointer text-white font-mono font-medium text-base">
          <Image width={12.5} height={17} src="/logout-icon.svg" alt="logo" />
          Logout
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
