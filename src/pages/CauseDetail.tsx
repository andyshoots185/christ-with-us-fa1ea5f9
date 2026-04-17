import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowRight, ArrowLeft, MapPin, Users, Target } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/PageHero";
import ProgressBar from "@/components/ProgressBar";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { causes } from "@/data/content";

const formatMoney = (n: number) => `$${n.toLocaleString()}`;

const CauseDetail = () => {
  const { slug } = useParams();
  const cause = causes.find((c) => c.slug === slug);
  if (!cause) return <Navigate to="/causes" replace />;

  const related = causes.filter((c) => c.slug !== slug).slice(0, 3);

  return (
    <Layout>
      <PageHero tag={cause.category} title={cause.title} subtitle={cause.excerpt} image={cause.image} />

      <section className="py-20 bg-background">
        <div className="container grid lg:grid-cols-[1.5fr_1fr] gap-12">
          <Reveal className="space-y-6">
            <Button asChild variant="ghost" className="px-0 text-primary hover:text-primary-glow">
              <Link to="/causes"><ArrowLeft className="mr-1 h-4 w-4" /> All causes</Link>
            </Button>
            <div className="rounded-3xl overflow-hidden aspect-[16/9] shadow-elevated">
              <img src={cause.image} alt={cause.title} className="w-full h-full object-cover" />
            </div>
            <div className="prose prose-lg max-w-none">
              {cause.body?.map((p, i) => (
                <p key={i} className="text-foreground/85 leading-relaxed text-lg">{p}</p>
              ))}
            </div>

            {cause.gallery && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-6">
                {cause.gallery.map((g, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden aspect-square">
                    <img src={g} alt="" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                ))}
              </div>
            )}
          </Reveal>

          <Reveal delay={120} className="lg:sticky lg:top-28 self-start space-y-4">
            <div className="bg-card rounded-3xl p-7 border border-border shadow-elevated">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Campaign progress</div>
              <div className="mt-4 flex justify-between items-end">
                <div>
                  <div className="text-xs text-muted-foreground">Raised</div>
                  <div className="text-3xl font-black text-primary">{formatMoney(cause.raised)}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">Goal</div>
                  <div className="text-xl font-bold">{formatMoney(cause.goal)}</div>
                </div>
              </div>
              <ProgressBar raised={cause.raised} goal={cause.goal} className="mt-4" />
              <Button asChild className="mt-6 w-full rounded-full bg-primary hover:bg-primary-glow text-primary-foreground h-12 shadow-glow">
                <Link to="/donate">Donate now <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </div>

            <div className="bg-card rounded-3xl p-7 border border-border shadow-card space-y-4">
              {cause.location && (
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div><div className="text-xs text-muted-foreground">Location</div><div className="font-semibold text-sm">{cause.location}</div></div>
                </div>
              )}
              {cause.beneficiaries && (
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-primary mt-0.5" />
                  <div><div className="text-xs text-muted-foreground">Beneficiaries</div><div className="font-semibold text-sm">{cause.beneficiaries}</div></div>
                </div>
              )}
              <div className="flex items-start gap-3">
                <Target className="h-5 w-5 text-primary mt-0.5" />
                <div><div className="text-xs text-muted-foreground">Category</div><div className="font-semibold text-sm">{cause.category}</div></div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 bg-background">
        <div className="container">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">Related causes</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((c) => (
              <Link key={c.slug} to={`/causes/${c.slug}`} className="group bg-card rounded-3xl overflow-hidden border border-border shadow-card hover:shadow-elevated transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={c.image} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-5">
                  <h4 className="font-bold leading-snug group-hover:text-primary transition-colors">{c.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CauseDetail;
