import { Link } from "react-router-dom";
import { Check, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import { sponsorTiers } from "@/data/content";

const SponsorAChild = () => (
  <section className="py-24 bg-secondary/40">
    <div className="container">
      <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span className="text-primary text-xs font-bold tracking-widest uppercase">● Sponsor a Child</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 leading-tight max-w-xl">
            Become Their Constant.
          </h2>
        </div>
        <p className="text-muted-foreground max-w-sm">
          Monthly sponsorships fund school fees, daily meals, healthcare and the steady presence every child deserves.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6">
        {sponsorTiers.map((t, i) => {
          const featured = i === 1;
          return (
            <Reveal
              key={t.tier}
              delay={i * 120}
              className={`relative rounded-3xl p-8 border transition-all flex flex-col ${
                featured
                  ? "carbon ring-2 ring-primary border-transparent shadow-glow"
                  : "bg-card border-border shadow-card hover:shadow-elevated"
              }`}
            >
              {featured && (
                <span className="absolute -top-3 left-8 text-xs font-bold bg-primary text-primary-foreground px-3 py-1 rounded-full">
                  Most loved
                </span>
              )}
              <div className="flex items-center gap-3">
                <Heart className={`h-6 w-6 ${featured ? "text-primary fill-primary" : "text-primary"}`} />
                <h3 className={`text-2xl font-bold ${featured ? "text-white" : ""}`}>{t.tier}</h3>
              </div>
              <div className={`mt-6 flex items-baseline gap-1 ${featured ? "text-white" : ""}`}>
                <span className="text-5xl font-black tracking-tight">${t.monthly}</span>
                <span className={`text-sm ${featured ? "text-carbon-muted" : "text-muted-foreground"}`}>/month</span>
              </div>
              <ul className={`mt-7 space-y-3 text-sm flex-1 ${featured ? "text-carbon-muted" : "text-muted-foreground"}`}>
                {t.perks.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className={`mt-8 rounded-full w-full h-12 ${
                featured
                  ? "bg-primary hover:bg-primary-glow text-primary-foreground"
                  : "bg-foreground text-background hover:bg-primary hover:text-primary-foreground"
              }`}>
                <Link to="/donate">Sponsor monthly</Link>
              </Button>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default SponsorAChild;
