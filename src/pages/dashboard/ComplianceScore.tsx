import Card from "../../components/Card/Card"
import PieChart from "../../components/Charts/PieChart"

const data = [
  { name: 'Completed', value: 65 },
  { name: 'Remaining', value: 35 },
];

const ComplianceScore = () => {
  return (
    <Card
      cardTitle="Overall Compliance Score"
      titleClass="text-base font-bold leading-4"
      widthClass="w-full xl:max-w-[368px] "
      heightClass="h-full xl:max-h-[283px]"
      className="flex flex-col py-6 px-4"
    >
      <div className="flex flex-col items-center text-center w-64.5 h-64.5 mx-auto">
        <PieChart
          containerClassName="min-w-64.5 min-h-64.5 -mt-16"
          data={data}
          cx="50%"
          cy="100%"
          startAngle={180}
          endAngle={0}
        />
        <div className="flex flex-col items-center gap-[30.44px] -mt-16">
          <div className="text-44 font-bold text-primary leading-4">65%</div>
          <div className="text-secondary font-normal text-sm leading-4">
            Basic Standards 2025
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ComplianceScore;