import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAutoHideOnScroll } from "@/hooks/use-scroll-direction";

const seed = [
  { name: "Amina K.", amount: 25, where: "Kampala" },
  { name: "John M.", amount: 100, where: "London, UK" },
  { name: "Grace T.", amount: 50, where: "Toronto, CA" },
  { name: "Daniel O.", amount: 250, where: "Berlin, DE" },
  { name: "Sarah W.", amount: 35, where: "Nairobi, KE" },
  { name: "Anonymous", amount: 500, where: "New York, US" },
  { name: "Lily A.", amount: 75, where: "Sydney, AU" },
  { name: "Pastor Daniel", amount: 60, where: "Jinja, UG" },
];

const DonationTicker = () => {
  const [i, setI] = useState(0);
  const visible = useAutoHideOnScroll();

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % seed.length), 4000);
    return () => clearInterval(id);
  }, []);

  const d = seed[i];

  return (
    <div
      className={cn(
        "fixed bottom-4 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-4 z-40 max-w-[calc(100vw-2rem)] transition-all duration-300 ease-out",
        visible ? "translate-y-0 opacity-100" : "translate-y-[200%] opacity-0 pointer-events-none"
      )}
    >
      <div className="bg-card border border-border shadow-elevated rounded-full pl-2 pr-5 py-2 flex items-center gap-3 max-w-sm">
        <div className="h-9 w-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0">
          <Heart className="h-4 w-4 fill-current" />
        </div>
        <div className="text-xs leading-tight">
          <div className="font-semibold">
            {d.name} just gave <span className="text-primary">${d.amount}</span>
          </div>
          <div className="text-muted-foreground">From {d.where} · just now</div>
        </div>
      </div>
    </div>
  );
};

export default DonationTicker;
