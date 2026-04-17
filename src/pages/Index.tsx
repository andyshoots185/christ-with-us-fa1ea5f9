import { Link } from "react-router-dom";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, HeartHandshake, Sparkles, Users, Globe2, ChevronRight, Play } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ProgressBar from "@/components/ProgressBar";
import CountUp from "@/components/CountUp";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import { causes, partners, faqs, stories } from "@/data/content";
import Reveal from "@/components/Reveal";
import Testimonials from "@/components/Testimonials";
import SponsorAChild from "@/components/SponsorAChild";
import Accreditations from "@/components/Accreditations";

const formatMoney = (n: number) => `$${n.toLocaleString()}`;

const transformCards = [
  {
    title: "Aid Bringing Care",
    desc: "An ongoing initiative to bring relief, comfort and dignity to families in distress.",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "A Strength to Stand",
    desc: "Programs that rebuild lives through mentorship, skills and emotional support.",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Power Meaningful Change",
    desc: "Funded by your love — turning intention into measurable impact every single day.",
    image: "https://images.unsplash.com/photo-1518398046578-8cca57782e17?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Hope in Every Hand",
    desc: "Volunteers across borders showing up where help is needed the most.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=900&q=80",
  },
];

const Index = () => {
  const autoplay = useRef(Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true }));
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

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
          <Reveal>
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
          </Reveal>
          <Reveal delay={120} className="rounded-3xl overflow-hidden shadow-elevated aspect-[16/10]">
            <img
              src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1400&q=80"
              alt="Community workers gathering with children in Uganda"
              className="w-full h-full object-cover"
            />
          </Reveal>
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
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-primary text-xs font-bold tracking-widest uppercase">● Impact</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 max-w-xl leading-tight">
                Together for change
              </h2>
            </div>
            <p className="text-carbon-muted max-w-sm">
              Every number represents a life touched, a family fed, a child learning. Real change, transparently reported.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                value: 1000,
                suffix: "+",
                label: "Lives Impacted",
                icon: HeartHandshake,
                image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80",
              },
              {
                value: 300,
                suffix: "+",
                label: "Meals Delivered Weekly",
                icon: Users,
                image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1200&q=80",
              },
              {
                value: 266,
                suffix: "+",
                label: "Volunteers Worldwide",
                icon: Globe2,
                image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1200&q=80",
              },
            ].map((s, idx) => (
              <Reveal
                key={s.label}
                delay={idx * 120}
                className="relative rounded-3xl p-8 ring-1 ring-white/5 hover:ring-primary/40 transition-all group overflow-hidden min-h-[240px]"
              >
                <img
                  src={s.image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-carbon-elevated/90 via-carbon-elevated/80 to-carbon/90" />
                <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full bg-primary/30 blur-3xl opacity-0 group-hover:opacity-60 transition-opacity" />
                <div className="relative">
                  <s.icon className="h-9 w-9 text-primary mb-6" />
                  <div className="text-5xl md:text-6xl font-bold text-white tracking-tight">
                    <CountUp end={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-3 text-carbon-muted">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CAUSES PREVIEW */}
      <section className="py-24 carbon">
        <div className="container">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-primary text-xs font-bold tracking-widest uppercase">● Causes</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-3 leading-tight max-w-xl text-white">
                Causes That Inspire
              </h2>
            </div>
            <Button asChild variant="ghost" className="text-primary hover:text-primary-glow self-start md:self-auto">
              <Link to="/causes">View all causes <ChevronRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {causes.slice(0, 3).map((c, idx) => (
              <Reveal key={c.slug} delay={idx * 100} as="article" className="group bg-carbon-elevated rounded-3xl overflow-hidden ring-1 ring-white/5 hover:ring-primary/30 transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={c.image} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg leading-snug text-white">{c.title}</h3>
                  <div className="mt-5 flex justify-between text-sm">
                    <div>
                      <div className="text-carbon-muted text-xs">Raised</div>
                      <div className="font-bold text-white">{formatMoney(c.raised)}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-carbon-muted text-xs">Goal</div>
                      <div className="font-bold text-white">{formatMoney(c.goal)}</div>
                    </div>
                  </div>
                  <ProgressBar raised={c.raised} goal={c.goal} className="mt-3" />
                  <Button asChild variant="outline" className="mt-6 rounded-full w-full bg-transparent border-white/15 text-white hover:bg-primary hover:text-primary-foreground hover:border-primary">
                    <Link to="/causes">Learn More <ArrowRight className="ml-1 h-4 w-4" /></Link>
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-between">
            <p className="text-carbon-muted text-sm">Real change, transparently funded.</p>
            <Button asChild className="rounded-full bg-primary hover:bg-primary-glow text-primary-foreground">
              <Link to="/causes">View All Causes <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SPARK POSITIVE CHANGE — Programs list */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-primary text-xs font-bold tracking-widest uppercase">● Programs</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-3 leading-tight max-w-xl">
                Spark Positive Change
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Targeted programs delivering relief, recovery and lasting opportunity to the communities we serve.
            </p>
          </div>

          <div className="grid lg:grid-cols-[0.9fr_1.3fr] gap-8 items-start">
            <div className="rounded-3xl overflow-hidden shadow-elevated aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1000&q=80"
                alt="Children in a community program"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4">
              {causes.slice(1, 4).map((c) => (
                <article key={c.slug} className="bg-card rounded-3xl p-6 md:p-7 border border-border shadow-card hover:shadow-elevated transition-all">
                  <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {c.category}
                  </span>
                  <div className="mt-4 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-bold text-xl leading-snug">{c.title}</h3>
                      <p className="text-muted-foreground text-sm mt-2 max-w-md">{c.excerpt}</p>
                    </div>
                    <div className="flex gap-6 md:text-right">
                      <div>
                        <div className="text-muted-foreground text-xs">Raised</div>
                        <div className="font-bold">{formatMoney(c.raised)}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground text-xs">Goal</div>
                        <div className="font-bold">{formatMoney(c.goal)}</div>
                      </div>
                    </div>
                  </div>
                  <ProgressBar raised={c.raised} goal={c.goal} className="mt-4" />
                  <Button asChild variant="ghost" className="mt-4 px-0 text-primary hover:text-primary-glow">
                    <Link to="/programs">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* UNITED, WE TRANSFORM — carousel-style cards */}
      <section className="py-24 bg-secondary/40">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-primary text-xs font-bold tracking-widest uppercase">● Stories of Action</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-3 leading-tight max-w-xl">
                United, We Transform
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Browse the initiatives uniting volunteers, donors and communities into one powerful movement.
            </p>
          </div>

          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true, dragFree: false }}
            plugins={[autoplay.current]}
            onMouseEnter={() => autoplay.current.stop()}
            onMouseLeave={() => autoplay.current.play()}
            className="w-full"
          >
            <CarouselContent className="-ml-5">
              {transformCards.map((t) => (
                <CarouselItem key={t.title} className="pl-5 basis-full sm:basis-1/2 lg:basis-1/4">
                  <article className="group rounded-3xl overflow-hidden carbon ring-1 ring-white/5 hover:ring-primary/40 transition-all h-full">
                    <div className="aspect-[4/5] relative overflow-hidden">
                      <img src={t.image} alt={t.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/50 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-white font-bold text-lg leading-tight">{t.title}</h3>
                        <p className="text-carbon-muted text-sm mt-2 line-clamp-2">{t.desc}</p>
                      </div>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex gap-2 relative">
                  <CarouselPrevious className="static translate-y-0 h-11 w-11 bg-card border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary" />
                  <CarouselNext className="static translate-y-0 h-11 w-11 bg-card border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary" />
                </div>
                <div className="flex gap-1.5">
                  {Array.from({ length: count }).map((_, i) => (
                    <button
                      key={i}
                      aria-label={`Go to slide ${i + 1}`}
                      onClick={() => api?.scrollTo(i)}
                      className={`h-1.5 rounded-full transition-all ${i === current ? "w-6 bg-primary" : "w-1.5 bg-border"}`}
                    />
                  ))}
                </div>
              </div>
              <Button asChild className="rounded-full bg-primary hover:bg-primary-glow text-primary-foreground">
                <Link to="/programs">Join the Movement <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </div>
          </Carousel>
        </div>
      </section>

      {/* NEWS. STORIES. VOICES */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-primary text-xs font-bold tracking-widest uppercase">● Blog</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-3 leading-tight max-w-xl">
                News. Stories. Voices.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Read first-hand accounts from the field — the people, projects and progress shaping our mission.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.slice(0, 3).map((s, idx) => (
              <Reveal key={s.slug} delay={idx * 100} as="article" className="group bg-card rounded-3xl overflow-hidden border border-border shadow-card hover:shadow-elevated transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold">{s.category}</span>
                    <span className="text-muted-foreground">{s.date}</span>
                  </div>
                  <h3 className="mt-4 font-bold text-lg leading-snug group-hover:text-primary transition-colors">{s.title}</h3>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-between">
            <p className="text-muted-foreground text-sm">Discover more stories of compassion in action.</p>
            <Button asChild className="rounded-full bg-primary hover:bg-primary-glow text-primary-foreground">
              <Link to="/blog">View All Blogs <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* STORIES BRINGING HOPE — large video card */}
      <section className="py-24 bg-secondary/40">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-primary text-xs font-bold tracking-widest uppercase">● Featured</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-3 leading-tight max-w-xl">
                Stories Bringing Hope
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Watch how a single act of generosity reshaped an entire community in rural Uganda.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-elevated aspect-[21/10] group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1511949860663-92c5c57d48a7?auto=format&fit=crop&w=2000&q=80"
              alt="Children playing music in a field"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-carbon/80 via-carbon/20 to-transparent" />

            <div className="absolute inset-0 flex items-center justify-center">
              <button aria-label="Play video" className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-primary flex items-center justify-center shadow-glow hover:scale-110 transition-transform">
                <Play className="h-8 w-8 text-primary-foreground fill-current ml-1" />
              </button>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <div className="max-w-md bg-carbon/60 backdrop-blur-md rounded-2xl p-5 ring-1 ring-white/10">
                <h3 className="text-white font-bold text-xl leading-tight">
                  Bringing Hope: How a Single Day of Giving Changed Lives Forever
                </h3>
                <p className="text-carbon-muted text-sm mt-2">
                  Watch the documentary →
                </p>
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

      {/* CTA BANNER — split with image + stat */}
      <section className="pb-24 bg-background">
        <div className="container grid md:grid-cols-2 gap-5">
          <div className="rounded-3xl overflow-hidden aspect-[5/4] md:aspect-auto md:min-h-[360px] relative">
            <img
              src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1400&q=80"
              alt="Children at sunset"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-carbon/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <span className="text-primary text-xs font-bold tracking-widest uppercase">● Be the Reason</span>
              <h3 className="text-white font-bold text-2xl mt-2">Someone Smiles.</h3>
            </div>
          </div>

          <div className="rounded-3xl carbon hero-bg p-10 md:p-12 flex flex-col justify-between min-h-[360px]">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-2xl bg-primary/15 ring-1 ring-primary/30 flex items-center justify-center">
                <HeartHandshake className="h-8 w-8 text-primary" />
              </div>
              <p className="text-carbon-muted max-w-xs">
                Join us — every generous heart pushes the total higher.
              </p>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-black text-gradient-green leading-none">
                <CountUp end={1660000} prefix="$" suffix="+" />
              </div>
              <p className="text-carbon-muted mt-2">Raised globally this year</p>
              <Button asChild className="mt-6 rounded-full bg-primary hover:bg-primary-glow text-primary-foreground px-8 h-12 shadow-glow w-full md:w-auto">
                <Link to="/donate">Donate Now <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
