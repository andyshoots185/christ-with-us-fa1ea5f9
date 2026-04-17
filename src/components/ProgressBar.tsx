import { cn } from "@/lib/utils";

interface ProgressBarProps {
  raised: number;
  goal: number;
  className?: string;
}

const ProgressBar = ({ raised, goal, className }: ProgressBarProps) => {
  const pct = Math.min(100, Math.round((raised / goal) * 100));
  return (
    <div className={cn("w-full", className)}>
      <div className="h-3 w-full rounded-full bg-secondary overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-700"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
