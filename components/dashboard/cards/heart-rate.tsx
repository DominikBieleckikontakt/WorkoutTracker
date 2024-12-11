"use client";
import React from "react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Droplet } from "lucide-react";

const chartData = [
  { hour: "8", rate: 80 },
  { hour: "9", rate: 80 },
  { hour: "10", rate: 95 },
  { hour: "11", rate: 90 },
  { hour: "12", rate: 120 },
  { hour: "13", rate: 80 },
  { hour: "14", rate: 72 },
  { hour: "15", rate: 60 },
  { hour: "16", rate: 66 },
  { hour: "17", rate: 72 },
  { hour: "18", rate: 82 },
];

const chartConfig = {
  rate: {
    label: "Rate",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const HeartRate = () => {
  return (
    <div className="h-full space-y-5">
      <div>
        <h4 className="font-semibold text-xl">Your heart rate</h4>
        <p className="text-sm font-light text-text-light">Last 10 hours</p>
      </div>
      <ChartContainer config={chartConfig}>
        <LineChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={true} />
          <XAxis
            dataKey="hour"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Line
            dataKey="rate"
            type="linear"
            stroke="var(--color-rate)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
};

export default HeartRate;
