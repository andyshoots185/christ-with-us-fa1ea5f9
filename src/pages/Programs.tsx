import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Users, Activity, CheckCircle2 } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import { Button } from "@/components/ui/button";
import { programs } from "@/data/content";
import { photos } from "@/data/images";

const statusStyles: Record<string, string> = {
  Active: "bg-primary/10 text-primary",
  Expanding: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  New: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
};

const Programs = () => (
  <Layout>
    <PageHero
      tag="Programs"
      title="Programs Built for Lasting Change"
      subtitle="Long-running initiatives — measured every term, shared transparently, designed to outlive us."
      image={photos.education}
    />

    {/* OVERVIEW STATS */}
    <section className="py-16 bg-background border-b border-border">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { value: programs.length, label: "Active programs" },
          { value: 22000, suffix: "+", label: "People reached" },
          { value: 9, label: "Years on the ground" },
          { value: 85, suffix: "%", label: "Funds to programs" },
        ].map((s, i) => (
          <Reveal key={s.label} delay={i * 80} className="text-center md:text-left">
            <div className="text-3xl md:text-5xl font-bold text-foreground">
              <CountUp end={s.value} suffix={s.suffix} />
            </div>
            <div className="text-xs md:text-sm text-muted-foreground mt-2 uppercase tracking-wider">
              {s.label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* PROGRAMS LIST */}
    <section className="py-20 bg-secondary/40">
      <div className="container space-y-8">
        {programs.map((p, idx) => (
          <Reveal
            key={p.slug}
            delay={(idx % 3) * 80}
            as="article"
            className="bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-elevated transition-all border border-border grid lg:grid-cols-[460px_1fr]"
          >
            <Link
              to={`/programs/${p.slug}`}
              className="aspect-[4/3] lg:aspect-auto overflow-hidden block group relative"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <span
                className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${statusStyles[p.status]}`}
              >
                ● {p.status}
              </span>
            </Link>

            <div className="p-8 md:p-10 flex flex-col">
              <span className="self-start inline-block px-3 py-1 rounded-full bg-foreground/5 text-foreground/70 text-xs font-bold mb-3 uppercase tracking-wider">
                {p.category}
              </span>
              <h3 className="font-bold text-2xl md:text-3xl leading-tight">
                <Link to={`/programs/${p.slug}`} className="hover:text-primary transition-colors">
                  {p.title}
                </Link>
              </h3>
              <p className="mt-3 text-muted-foreground max-w-2xl">{p.excerpt}</p>

              {/* Meta strip */}
              <div className="mt-6 grid grid-cols-3 gap-4 max-w-xl">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary shrink-0" />
                  <div>
                    <div className="text-xs text-muted-foreground">Participants</div>
                    <div className="font-bold text-sm">{p.participants.toLocaleString()}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4 text-primary shrink-0" />
                  <div>
                    <div className="text-xs text-muted-foreground">Cadence</div>
                    <div className="font-bold text-sm">{p.duration}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary shrink-0" />
                  <div>
                    <div className="text-xs text-muted-foreground">Since</div>
                    <div className="font-bold text-sm">{p.startedYear}</div>
                  </div>
                </div>
              </div>

              {/* Outcomes */}
              <div className="mt-6 bg-secondary/60 rounded-2xl p-5">
                <div className="text-xs font-bold uppercase tracking-wider text-foreground/70 mb-3">
                  Measured outcomes
                </div>
                <ul className="space-y-2">
                  {p.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                asChild
                className="mt-7 self-start rounded-full bg-foreground text-background hover:bg-primary hover:text-primary-foreground"
              >
                <Link to={`/programs/${p.slug}`}>
                  Explore the program <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  </Layout>
);

export default Programs;
