import React from "react";
import { useLocation } from "react-router-dom";

interface MenuItemProps {
  label: string;
  icon: string;
  link: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, icon, link }) => {
  const { pathname } = useLocation();
  return (
    <a
      href={link}
      className={`w-52 h-10 rounded-10 p-2.5 hover:bg-hover-link hover:invert hover:brightness-0 flex items-center gap-2.5 transition-colors cursor-pointer ${link === pathname ? "bg-hover-link invert brightness-0" : ""}`}
    >
      <img
        className="w-4 h-4 transition-colors aspect-square"
        src={icon}
        alt={label}
      />
      <span className="font-medium text-sm text-link capitalize">{label}</span>
    </a>
  );
};

export default MenuItem;
