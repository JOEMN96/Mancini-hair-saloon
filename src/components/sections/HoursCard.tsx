import { Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { hoursConfig } from "@/data/siteConfig";

export function HoursCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          Business Hours
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {hoursConfig.hours.map((hours) => (
            <div
              key={hours.day}
              className="flex justify-between items-center py-2 border-b last:border-0"
            >
              <span className="font-medium">{hours.day}</span>
              <span className="text-muted-foreground">
                {hours.isClosed ? "Closed" : `${hours.open} - ${hours.close}`}
              </span>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-4">
          {hoursConfig.note}
        </p>
      </CardContent>
    </Card>
  );
}
