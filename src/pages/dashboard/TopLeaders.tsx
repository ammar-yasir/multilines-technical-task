import type { FC } from "react";
import Card from "../../components/Card/Card";
import type { LeaderProfileItemProps } from "../perspectives/Perspectives.types";

const leaders: LeaderProfileItemProps[] = [
  {
    name: "Ahmad Al-Ali",
    designation: "Strategy Perspective",
    proficiency: "96%",
  },
  {
    name: "Ammar Yasir",
    designation: "Senior Frontend Engineer",
    proficiency: "96%",
  },
  {
    name: "Ahmad Al-Ali",
    designation: "Strategy Perspective",
    proficiency: "96%",
  },
];

const LeaderProfileItem: FC<LeaderProfileItemProps> = ({
  name,
  designation,
  proficiency,
}) => (
  <div className="flex gap-[10.89px] items-center border-t first:border-t-0 border-gray-100 pt-[16.05px]">
    <img
      className="w-[47.1px] h-[47.1px]"
      src="/assets/images/common/profile-pic.svg"
      alt="Leader Pic"
    />
    <div className="w-full flex justify-between items-center">
      <div className="flex flex-col gap-0.5">
        <p className="text-primary text-base font-medium leading-5.5">{name}</p>
        <p className="text-secondary text-base font-medium leading-5.5">{designation}</p>
      </div>
      <span className="text-base text-primary font-bold">{proficiency}</span>
    </div>
  </div>
);

export const TopLeaders = () => {
  return (
    <Card
      cardTitle="Top Performing Perspective Leaders"
      titleClass="text-base font-bold leading-4"
      widthClass="w-full xl:max-w-92"
      heightClass="h-full xl:max-h-70.75"
      className="px-4 pt-6"
    >
      <div className="flex flex-col gap-[16.4px]">
        {leaders?.map((leader, index) => (
          <LeaderProfileItem
            key={index}
            name={leader?.name}
            designation={leader?.designation}
            proficiency={leader?.proficiency}
          />
        ))}
      </div>
    </Card>
  );
};
