import { Link } from "react-router-dom";
import { ArrowRight, HeartHandshake, Sparkles, Users, Globe2, ChevronRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ProgressBar from "@/components/ProgressBar";
import { causes, partners, faqs } from "@/data/content";

const formatMoney = (n: number) => `$${n.toLocaleString()}`;

const Index = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative carbon hero-bg min-h-[100vh] flex items-center pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 mix-blend-luminosity"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=2000&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-fade-bottom)" }} />

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 text-primary text-xs font-semibold mb-7 ring-1 ring-primary/30 animate-fade-up">
              <Sparkles className="h-3.5 w-3.5" /> Together for Change · Kampala, Uganda
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight animate-fade-up">
              Unite. Act.<br />
              <span className="text-gradient-green">Transform.</span>
            </h1>
            <p className="mt-7 text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed animate-fade-up">
              Christ With Us is a purpose-driven nonprofit working hand-in-hand with communities across Uganda to create lasting change — through education, healthcare, clean water and unwavering hope.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 animate-fade-up">
              <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary-glow text-primary-foreground font-semibold px-7 h-12 shadow-glow">
                <Link to="/donate">Get Started <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full bg-transparent border-white/25 text-white hover:bg-white hover:text-carbon h-12 px-7">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="bg-secondary/40 py-16">
        <div className="container grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-primary text-xs font-bold tracking-widest uppercase">● About Us</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 leading-tight">
              United Together to Create Enduring Hope
            </h2>
            <p className="mt-5 text-muted-foreground max-w-lg">
              From the slopes of Kampala to the villages along Lake Victoria, our teams meet people where they are — restoring dignity, opportunity and faith in tomorrow.
            </p>
            <Button asChild variant="ghost" className="mt-6 text-primary hover:text-primary-glow px-0">
              <Link to="/about">Learn more <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-elevated aspect-[16/10]">
            <img
              src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1400&q=80"
              alt="Community workers gathering with children in Uganda"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* PARTNER MARQUEE */}
      <section className="py-12 bg-background border-y border-border">
        <div className="container mb-6">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">● Trusted Partners</p>
        </div>
        <div className="overflow-hidden">
          <div className="flex gap-16 marquee w-max">
            {[...partners, ...partners].map((p, i) => (
              <span key={i} className="text-2xl md:text-3xl font-black text-muted-foreground/40 tracking-tight whitespace-nowrap grayscale">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="carbon py-24">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-primary text-xs font-bold tracking-widest uppercase">● Impact</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 max-w-xl leading-tight">
                Together for change
              </h2>
            </div>
            <p className="text-carbon-muted max-w-sm">
              Every number represents a life touched, a family fed, a child learning. Real change, transparently reported.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { num: "11,000+", label: "Lives Impacted", icon: HeartHandshake },
              { num: "1,200+", label: "Meals Delivered Weekly", icon: Users },
              { num: "240+", label: "Volunteers Worldwide", icon: Globe2 },
            ].map((s) => (
              <div key={s.label} className="bg-carbon-elevated rounded-3xl p-8 ring-1 ring-white/5 hover:ring-primary/40 transition-all group">
                <s.icon className="h-9 w-9 text-primary mb-6" />
                <div className="text-5xl md:text-6xl font-bold text-white tracking-tight">{s.num}</div>
                <div className="mt-3 text-carbon-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAUSES PREVIEW */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-primary text-xs font-bold tracking-widest uppercase">● Causes</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-3 leading-tight max-w-xl">
                Causes That Inspire
              </h2>
            </div>
            <Button asChild variant="ghost" className="text-primary self-start md:self-auto">
              <Link to="/causes">View all causes <ChevronRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {causes.slice(0, 3).map((c) => (
              <article key={c.slug} className="group bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-elevated transition-all border border-border">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={c.image} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg leading-snug">{c.title}</h3>
                  <div className="mt-5 flex justify-between text-sm">
                    <div>
                      <div className="text-muted-foreground text-xs">Raised</div>
                      <div className="font-bold">{formatMoney(c.raised)}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-muted-foreground text-xs">Goal</div>
                      <div className="font-bold">{formatMoney(c.goal)}</div>
                    </div>
                  </div>
                  <ProgressBar raised={c.raised} goal={c.goal} className="mt-3" />
                  <Button asChild variant="outline" className="mt-6 rounded-full w-full border-foreground/15 hover:bg-primary hover:text-primary-foreground hover:border-primary">
                    <Link to="/causes">Learn More <ArrowRight className="ml-1 h-4 w-4" /></Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 bg-secondary/40">
        <div className="container">
          <div className="rounded-3xl carbon hero-bg p-10 md:p-16 relative overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  Join us for the journey, no payment is too small for change.
                </h3>
              </div>
              <div className="md:text-right">
                <div className="text-5xl md:text-6xl font-black text-gradient-green">$1,660,000+</div>
                <p className="text-carbon-muted mt-2">Raised globally this year</p>
                <Button asChild className="mt-6 rounded-full bg-primary hover:bg-primary-glow text-primary-foreground px-8 h-12 shadow-glow">
                  <Link to="/donate">Apply Now <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-background">
        <div className="container grid lg:grid-cols-[1fr_1.4fr] gap-12">
          <div>
            <span className="text-primary text-xs font-bold tracking-widest uppercase">● FAQ</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 leading-tight">
              What You're Thinking,<br/>We've Answered.
            </h2>
            <p className="mt-5 text-muted-foreground max-w-md">
              Helpful answers to common questions about donating, volunteering and fundraising.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-secondary/60 rounded-2xl px-6 border-none">
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
