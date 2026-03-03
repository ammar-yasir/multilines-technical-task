import Card from "../../components/Card/Card";
import type { StatCardData } from "./Dashboard.types";

const statCards: StatCardData[] = [
  {
    label: "Overall Progress",
    value: "78.65%",
    icon: "/assets/icons/dashboard/overall-progress.svg",
  },
  {
    label: "Total Criteria",
    value: "95",
    icon: "/assets/icons/dashboard/total-criteria.svg",
  },
  {
    label: "Completed Criteria",
    value: "52",
    icon: "/assets/icons/dashboard/completed-criteria.svg",
  },
  {
    label: "Evidence Documents",
    value: "386",
    icon: "/assets/icons/dashboard/evidence-docs.svg",
  },
  {
    label: "Evidence (Completed)",
    value: "302",
    icon: "/assets/icons/dashboard/evidence-completed.svg",
  },
  {
    label: "Uploaded To DGA",
    value: "258",
    icon: "/assets/icons/dashboard/dga.svg",
  },
];

const StatsSummary = () => {
  return (
    <div className="flex flex-col xl:flex-row justify-between gap-4">
      {statCards.map((item, index: number) => (
        <Card key={index} widthClass="min-w-44" heightClass="h-20" padding="py-4 pl-4 pr-3">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <span className="text-primary text-2xl font-bold capitalize leading-4">
                {item.value}
              </span>
              <img src={item.icon} alt={item.label} className="w-5 h-4.5" />
            </div>
            <span className="text-secondary text-sm font-normal leading-4">
              {item.label}
            </span>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default StatsSummary;
