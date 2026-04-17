import { ShieldCheck, BadgeCheck, Award, Globe2 } from "lucide-react";
import { accreditations } from "@/data/content";

const icons = [ShieldCheck, BadgeCheck, Award, Globe2];

const Accreditations = () => (
  <section className="py-14 bg-secondary/40 border-y border-border">
    <div className="container">
      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6 text-center">
        ● Trusted, Transparent &amp; Accredited
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {accreditations.map((a, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div key={a} className="bg-card rounded-2xl p-5 flex items-center gap-3 border border-border shadow-card">
              <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-xs md:text-sm font-semibold leading-tight">{a}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Accreditations;
