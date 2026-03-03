interface BarChartData {
  month: string;
  score: number;
}

export interface BarChartProps {
  data: BarChartData[];
  containerClassName?: string;
  fillColor?: string;
  trackColor?: string;
}