import AuditReadiness from "./AuditReadiness";
import ComplianceScore from "./ComplianceScore";
import MonthlyPerformance from "./MonthlyPerformance";
import RecentActivites from "./RecentActivites";
import StatsSummary from "./StatsSummary";
import { TopLeaders } from "./TopLeaders";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4">
      <StatsSummary />
      <div className="flex flex-col xl:flex-row justify-between gap-4">
        <ComplianceScore />
        <TopLeaders />
        <RecentActivites />
      </div>
      <div className="flex flex-col xl:flex-row justify-between gap-4">
        <MonthlyPerformance />
        <AuditReadiness />
      </div>
    </div>
  );
};

export default Dashboard;
