import { useState } from "react";
// import Logo from "./Logo";
import MenuItem from "./MenuItem";

const menuItems = [
  {
    label: "Dashboard",
    link: "/dashboard",
    icon: "/assets/icons/sidebar/dashboard.svg",
  },
  { label: "Users", link: "/users", icon: "/assets/icons/sidebar/users.svg" },
  { label: "Tasks", link: "#", icon: "/assets/icons/sidebar/tasks.svg" },
  {
    label: "Documents",
    link: "#",
    icon: "/assets/icons/sidebar/documents.svg",
  },
  { label: "Reports", link: "#", icon: "/assets/icons/sidebar/reports.svg" },
];

const SidebarContent = ({ onLogout }: { onLogout?: () => void }) => (
  <div className="w-64 h-full bg-primary pl-5.75 pr-6.25 py-2.5">
    <div className="mb-6.5">{/* <Logo /> */}</div>
    <div className="flex flex-col gap-2">
      {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          label={item.label}
          link={item.link}
          icon={item.icon}
        />
      ))}
    </div>
    <div className="flex justify-center mt-5">
      <button
        type="button"
        className="lg:hidden h-10 w-fit flex items-center gap-2.5 bg-white rounded-lg px-6 py-3.5 cursor-pointer"
      >
        <span
          className="text-priamry text-base font-normal leading-4"
          onClick={onLogout}
        >
          Logout
        </span>
      </button>
    </div>
  </div>
);

const Sidebar = ({ onLogout }: { onLogout?: () => void }) => {
 const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* MOBILE HEADER (Visible only on small screens) */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-primary text-white w-full fixed top-0 z-50">
        <div className="flex items-center gap-2">
          {/* <Logo /> */}
        </div>
        <button className="cursor-pointer" onClick={() => setIsOpen(true)}>
          <img
            className="w-6 h-6 invert"
            src="/assets/icons/sidebar/hamburger.svg"
            alt="Hamburger menu"
          />
        </button>
      </div>

      {/* MOBILE DRAWER OVERLAY */}
      {isOpen && (
        <div className="fixed inset-0 z-60 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer Slide */}
          <div className="fixed inset-y-0 left-0 w-64 animate-in slide-in-from-left duration-300">
            <div className="absolute top-4 -right-3.25 text-white">
              <div className="w-8 h-8 rounded-full bg-white p-2 cursor-pointer" onClick={() => setIsOpen(false)}>
                <img
                  className="w-4 h-4"
                  src="/assets/icons/sidebar/menu-back.svg"
                  alt="Hamburger menu collapse"
                />
              </div>
            </div>
            <SidebarContent onLogout={onLogout} />
          </div>
        </div>
      )}

      {/* DESKTOP SIDEBAR (Hidden on mobile) */}
      <div className="hidden lg:flex flex-col w-64 h-screen sticky top-0">
        <SidebarContent />
      </div>
    </>
  );
};

export default Sidebar;
