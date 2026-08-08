import { Card, CardContent } from "@/components/ui/Card";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { STATS } from "@/lib/data";

export function Stats() {
  return (
    <Card static>
      <CardContent className="space-y-4">
        {STATS.map((stat) => (
          <AnimatedCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
        ))}
      </CardContent>
    </Card>
  );
}
