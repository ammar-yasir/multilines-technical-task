import BarChart from "../../components/Charts/BarChart"
import Card from "../../components/Card/Card"

const performanceData = [
  { month: "Jan", score: 88 },
  { month: "Feb", score: 76 },
  { month: "Mar", score: 81 },
  { month: "Apr", score: 43 },
  { month: "May", score: 88 },
  { month: "Jun", score: 79 },
  { month: "Jul", score: 55 },
  { month: "Aug", score: 88 },
  { month: "Sept", score: 79 },
  { month: "Oct", score: 55 },
  { month: "Nov", score: 88 },
  { month: "Dec", score: 79 },
];

const MonthlyPerformance = () => {
  return (
    <Card
      cardTitle="12-Month Performance"
      titleClass="text-base font-bold leading-4 mb-6.5"
      widthClass="w-full"
      heightClass="h-full"
      className="px-4 pt-6.5 pb-6.25"
    >
      <div className="w-full h-56.75">
        <BarChart data={performanceData} />
      </div>
    </Card>
  );
};

export default MonthlyPerformance;

