import { useCountUp } from "@/hooks/use-count-up";

interface CountUpProps {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
  /** If true, format with commas (e.g. 1,660,000). */
  format?: boolean;
}

const CountUp = ({ end, prefix = "", suffix = "", duration, className, format = true }: CountUpProps) => {
  const { ref, value } = useCountUp(end, { duration });
  const display = format ? value.toLocaleString() : String(value);
  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
};

export default CountUp;
