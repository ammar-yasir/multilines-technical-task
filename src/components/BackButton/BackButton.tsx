import { Link } from "react-router-dom";
import type { BackButtonProps } from "./BackButton.types";

const BackButton: React.FC<BackButtonProps> = ({ label }) => {
  return (
    <Link to="/dashboard" className="flex gap-4 items-center cursor-pointer">
      <img
        src="/assets/icons/common/arrow-left.svg"
        alt="Back"
        className="w-4 h-4"
      />
      <span className="font-bold text-base text-primary leading-4">{label}</span>
    </Link>
  );
};

export default BackButton