interface PieChartData {
  name: string;
  value: number;
}

export interface PieChartProps {
  data: PieChartData[];
  containerClassName?: string;
  fillColor?: string;
  trackColor?: string;
  cx?: string | number;
  cy?: string | number;
  startAngle?: number;
  endAngle?: number;
  paddingAngle?: number;
  cornerRadius?: number;
  innerRadius?: string | number;
  outerRadius?: string | number;
}