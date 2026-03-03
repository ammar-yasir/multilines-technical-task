import type { FC } from "react";
import type { PieChartProps } from "./PieChart.types";
import { PieChart as PieChartComponent, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const PieChart: FC<PieChartProps> = ({
  data,
  containerClassName = "",
  fillColor = "#DB1F26",
  trackColor = "#F5F8FB",
  cx = "50%",
  cy = "50%",
  startAngle = 180,
  endAngle = 0,
  paddingAngle = 0,
  cornerRadius = 20,
  innerRadius = "85%",
  outerRadius = "100%",
}) => {
  return (
    <ResponsiveContainer className={containerClassName} width="100%" height="100%">
      <PieChartComponent width="100%" height="100%">
        <Pie
          data={data}
          cx={cx} // Center X
          cy={cy} // Center Y (Bottom of the container)
          startAngle={startAngle} // Start at the left
          endAngle={endAngle} // End at the right
          innerRadius={innerRadius} // Creates the "donut" hole
          outerRadius={outerRadius} // Thickness of the bar
          paddingAngle={paddingAngle}
          cornerRadius={cornerRadius}
          dataKey="value"
          stroke="none"
        >
          <Cell fill={fillColor} />
          {trackColor && <Cell fill={trackColor} />}
          <Tooltip />
        </Pie>
      </PieChartComponent>
    </ResponsiveContainer>
  );
};

export default PieChart;