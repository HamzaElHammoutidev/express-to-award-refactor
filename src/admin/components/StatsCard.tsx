import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
  className?: string;
}

const StatsCard = ({ label, value, icon: Icon, trend, trendUp, className }: StatsCardProps) => (
  <div className={cn("bg-card rounded-xl border border-border p-5 flex items-start justify-between", className)}>
    <div>
      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{label}</p>
      <p className="text-2xl font-bold text-foreground mt-1">{value}</p>
      {trend && (
        <p className={cn("text-xs font-medium mt-1", trendUp ? "text-emerald-600" : "text-red-500")}>
          {trend}
        </p>
      )}
    </div>
    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
      <Icon className="h-5 w-5 text-primary" />
    </div>
  </div>
);

export default StatsCard;
