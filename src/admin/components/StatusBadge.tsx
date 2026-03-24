import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  label: string;
  colorClass: string;
}

const StatusBadge = ({ label, colorClass }: StatusBadgeProps) => (
  <span className={cn("inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold capitalize", colorClass)}>
    {label}
  </span>
);

export default StatusBadge;
