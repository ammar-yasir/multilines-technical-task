import PieChart from "../../components/Charts/PieChart";
import Card from "../../components/Card/Card";

const data = [
  { name: 'Completed', value: 80 },
  { name: 'Remaining', value: 20 },
];

const AuditReadiness = () => {
  return (
    <Card
      cardTitle="Audit Readiness"
      titleClass="text-base font-bold leading-4"
      widthClass="w-full xl:max-w-[368px]"
      heightClass="h-full xl:max-h-[322.09px]"
      className="flex flex-col py-6 px-4"
    >
      <div className="flex flex-col items-center text-center w-64.5 h-64.5 mx-auto">
        <PieChart
          containerClassName="min-w-64.5 min-h-64.5 -mt-24"
          data={data}
          fillColor="#1EA54E"
          cx="50%"
          cy="100%"
          startAngle={180}
          endAngle={0}
        />
        <div className="flex flex-col items-center gap-[30.44px] -mt-16">
          <div className="text-44 font-bold text-primary leading-4">
            {data[0].value}%
          </div>
          <div className="text-secondary font-normal text-sm leading-4">
            Readiness Level
          </div>
        </div>
        {/* Stats underneath Chart */}
        <div className="flex justify-between w-full border-t border-gray-100 mt-6 pt-8">
          <div className="flex flex-col gap-[10.98px]">
            <span className="text-primary text-2xl font-bold leading-4">12</span>
            <span className="text-secondary text-sm font-normal leading-4">
              Overdue Stds
            </span>
          </div>
          <div className="flex flex-col gap-[10.98px]">
            <span className="text-primary text-2xl font-bold leading-4">5</span>
            <span className="text-secondary text-sm font-normal leading-4">
              Missing Evidence
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default AuditReadiness;