import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

interface BarHorizontalProps {
  chartData: any[];
  chartConfig: ChartConfig;
  className?: string;
}

export default function BarHorizontal({
  chartData,
  chartConfig,
  className,
}: BarHorizontalProps) {
  return (
    <ChartContainer config={chartConfig} className={className}>
      <BarChart accessibilityLayer data={chartData} layout="vertical">
        <XAxis type="number" dataKey="value" hide />
        <YAxis
          dataKey="month"
          type="category"
          tickLine={false}
          tickMargin={5}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Bar dataKey="value" fill="var(--color-value)" radius={5} />
      </BarChart>
    </ChartContainer>
  );
}
