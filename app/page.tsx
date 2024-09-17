import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold mt-4 md:mt-8">
        Today's Cryptocurrency Prices by Market Cap
      </h1>

      <Card className="my-4 w-fit">
        <CardHeader>
          <CardTitle>Fear & Greed Index</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <CardTitle>36</CardTitle>
            <span>Fear</span>
          </div>
        </CardContent>
      </Card>
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
    </>
  );
}
