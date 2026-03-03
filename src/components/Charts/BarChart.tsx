import type { FC } from "react";
import {
  BarChart as BarChartComponent,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import type { BarChartProps } from "./BarChart.types";

const BarChart:FC<BarChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChartComponent
        data={data}
        margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
      >
        <defs>
          <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0078D7" stopOpacity={1} />
            <stop offset="100%" stopColor="#0078D7" stopOpacity={0} />
          </linearGradient>
        </defs>

        <CartesianGrid vertical={false} stroke="#E6EDF54D" />

        <XAxis
          dataKey="month"
          axisLine={{ stroke: "#E6EDF5", strokeWidth: 1 }}
          tickLine={false}
          tick={{ fill: "#8597A8", fontSize: 12, fontWeight: 400 }}
          dy={12}
        />

        <YAxis
          axisLine={{ stroke: "#E6EDF5", strokeWidth: 1 }}
          tickLine={false}
          tick={{ fill: "#8597A8", fontSize: 12, fontWeight: 400 }}
          domain={[0, 100]}
        />

        <Tooltip
          cursor={false} // Removes the background on hover
          contentStyle={{
            backgroundColor: "#F5F8FB",
            color: "#1D3557",
          }}
        />

        <Bar
          dataKey="score"
          fill="url(#barGradient)"
          radius={[4, 4, 0, 0]}
          barSize={40}
        />
      </BarChartComponent>
    </ResponsiveContainer>
  );
};

export default BarChart;