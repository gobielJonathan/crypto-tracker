"use client";

import { Eye, Wallet } from "lucide-react";
import { Pie, Label, Bar, BarChart, PieChart } from "recharts";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useAssetContext } from "@/context/asset";
import Hide from "@/components/hide";

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export default function View() {
  const { canSee, toggleSeeAsset } = useAssetContext();

  return (
    <div className="grid grid-cols-12 mt-4">
      <div className="col-span-12 md:col-span-4">
        <h5 className="font-bold">My portfolio</h5>

        <div className="rounded-md flex items-center my-4">
          <Avatar>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="ml-3">
            <h5 className="text-sm font-bold">Binance Portfolio</h5>
            <p className="text-sm">
              <Hide hide={canSee}>$180.000</Hide>
            </p>
          </div>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <button className="text-blue-500 font-bold text-center w-full">
              + Create Portofolio
            </button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Create Portfolio</SheetTitle>
              <div className="rounded-sm border border-stone-300 p-3 grid grid-cols-12 hover:cursor-pointer">
                <div className="col-span-12 md:col-span-2 flex items-center justify-center">
                  <Wallet />
                </div>
                <div className="col-span-12 md:col-span-10">
                  <h5 className="font-bold">Connect Binance Account</h5>
                  <p className="text-zinc-500">
                    Securely sync assets from your Binance account{" "}
                    <span className="font-bold">without using API key</span>
                  </p>
                </div>
              </div>

              <div className="rounded-sm border border-stone-300 p-3 grid grid-cols-12 hover:cursor-pointer">
                <div className="col-span-12 md:col-span-2 flex items-center justify-center">
                  <Wallet />
                </div>
                <div className="col-span-12 md:col-span-10">
                  <h5 className="font-bold">Connect Indodax Account</h5>
                  <p className="text-zinc-500">
                    Securely sync assets from your Binance account{" "}
                    <span className="font-bold">without using API key</span>
                  </p>
                </div>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <div className="col-span-12 md:col-span-8">
        <div className="flex items-center">
          <Avatar>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h5 className="text-sm font-bold ml-3">Binance Portfolio</h5>
        </div>

        <div className="my-2">
          <div className="flex items-center">
            <h3 className="text-4xl">
              <Hide hide={canSee}>$18,745.37</Hide>
            </h3>
            <div className="ml-3">
              <Eye
                size={20}
                onClick={toggleSeeAsset}
                className="hover:cursor-pointer"
              />
            </div>
          </div>
          <p className="text-sm mt-2 text-green-700">
            +<Hide hide={canSee}>$18,745.37</Hide> (24h)
          </p>
        </div>

        <div>
          <Card className="flex-1">
            <CardHeader>
              <CardTitle>Allocation</CardTitle>
            </CardHeader>
            <CardContent className="flex">
              <div className="flex-1">
                <ChartContainer
                  config={chartConfig}
                  className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
                >
                  <PieChart>
                    <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                    <Pie
                      data={chartData}
                      dataKey="visitors"
                      nameKey="browser"
                    />
                  </PieChart>
                </ChartContainer>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-x-3">
                  <div className="w-4 h-4 rounded-full bg-blue-700"></div>
                  <p>ETH</p>
                  <p>60%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-4">
          <p className="font-bold">Holdings</p>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">#</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead className="text-right">1%</TableHead>
                <TableHead className="text-right">24%</TableHead>
                <TableHead className="text-right">7d%</TableHead>
                <TableHead className="text-right">Market Cap</TableHead>
                <TableHead className="text-right">Volume(24h)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
