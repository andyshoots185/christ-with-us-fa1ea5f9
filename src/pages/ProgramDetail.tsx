import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowRight, ArrowLeft, Users, Calendar, Activity, CheckCircle2 } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { programs } from "@/data/content";

const ProgramDetail = () => {
  const { slug } = useParams();
  const program = programs.find((p) => p.slug === slug);
  if (!program) return <Navigate to="/programs" replace />;

  const related = programs.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <Layout>
      <PageHero tag={program.category} title={program.title} subtitle={program.excerpt} image={program.image} />

      <section className="py-20 bg-background">
        <div className="container grid lg:grid-cols-[1.5fr_1fr] gap-12">
          <Reveal className="space-y-6">
            <Button asChild variant="ghost" className="px-0 text-primary hover:text-primary-glow">
              <Link to="/programs"><ArrowLeft className="mr-1 h-4 w-4" /> All programs</Link>
            </Button>
            <div className="rounded-3xl overflow-hidden aspect-[16/9] shadow-elevated">
              <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
            </div>
            <div className="space-y-4">
              {program.body.map((p, i) => (
                <p key={i} className="text-foreground/85 leading-relaxed text-lg">{p}</p>
              ))}
            </div>

            <div className="bg-secondary/60 rounded-2xl p-6">
              <h4 className="font-bold uppercase text-xs tracking-wider text-foreground/70 mb-4">Measured outcomes</h4>
              <ul className="space-y-3">
                {program.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground/90">{o}</span>
                  </li>
                ))}
              </ul>
            </div>

            {program.gallery && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-2">
                {program.gallery.map((g, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden aspect-square">
                    <img src={g} alt="" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                ))}
              </div>
            )}
          </Reveal>

          <Reveal delay={120} className="lg:sticky lg:top-28 self-start space-y-4">
            <div className="bg-card rounded-3xl p-7 border border-border shadow-elevated space-y-5">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Program at a glance</div>
              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 text-primary mt-0.5" />
                <div><div className="text-xs text-muted-foreground">Participants</div><div className="font-semibold text-sm">{program.participants.toLocaleString()}</div></div>
              </div>
              <div className="flex items-start gap-3">
                <Activity className="h-5 w-5 text-primary mt-0.5" />
                <div><div className="text-xs text-muted-foreground">Cadence</div><div className="font-semibold text-sm">{program.duration}</div></div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-primary mt-0.5" />
                <div><div className="text-xs text-muted-foreground">Started</div><div className="font-semibold text-sm">{program.startedYear}</div></div>
              </div>
              <Button asChild className="w-full rounded-full bg-primary hover:bg-primary-glow text-primary-foreground h-12 shadow-glow">
                <Link to="/donate">Fund this program <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 bg-background">
        <div className="container">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">Related programs</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link key={p.slug} to={`/programs/${p.slug}`} className="group bg-card rounded-3xl overflow-hidden border border-border shadow-card hover:shadow-elevated transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-5">
                  <h4 className="font-bold leading-snug group-hover:text-primary transition-colors">{p.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProgramDetail;
