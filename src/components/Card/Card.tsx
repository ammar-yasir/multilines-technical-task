import type { FC } from "react";
import type { CardProps } from "./Card.types";

const Card: FC<CardProps> = ({
  widthClass,
  heightClass,
  cardBgColorClass = "bg-white",
  cardTitle,
  titleClass = "text-lg",
  padding = "p-4",
  className = "",
  children,
}) => {
  return (
    <div
      className={`${className} ${widthClass} ${heightClass} ${cardBgColorClass} ${padding} border border-gray-100 rounded-10`}
    >
      {cardTitle && (
        <h3
          className={`${titleClass} text-primary font-bold capitalize`}
        >
          {cardTitle}
        </h3>
      )}
      {children}
    </div>
  );
};

export default Card;