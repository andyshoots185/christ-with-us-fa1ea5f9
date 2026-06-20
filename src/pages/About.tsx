import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/PageHero";
import CountUp from "@/components/CountUp";
import Reveal from "@/components/Reveal";
import Testimonials from "@/components/Testimonials";
import Accreditations from "@/components/Accreditations";
import { Button } from "@/components/ui/button";
import { ArrowRight, HeartHandshake, Code2, Linkedin, Globe2 } from "lucide-react";
import { partners } from "@/data/content";
import { photos, team as teamPhotos } from "@/data/images";
import { donateWhatsAppUrl, INTL_PHONE } from "@/lib/contact";

const About = () => (
  <Layout>
    <PageHero
      tag="About"
      title="Driven By Purpose And Impact"
      subtitle="A self-driven community initiative founded in 2025 — uniting Arsenal supporters and good-hearted Ugandans to lift the vulnerable and fund grassroots organisations doing real work on the ground."
      image={photos.together}
    />

    {/* STATS + FEATURED IMAGE */}
    <section className="py-16 sm:py-20 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 items-end mb-10 sm:mb-12">
          <Reveal as="p" className="text-muted-foreground max-w-md">
            Founded in 2025 as a self-driven, fan-powered initiative — we directly support vulnerable communities and channel funding to small grassroots organisations across Uganda.
          </Reveal>
          <div className="grid grid-cols-2 gap-6 sm:gap-8">
            {[
              { value: 420, suffix: "+", label: "Lives Impacted" },
              { value: 18, suffix: "+", label: "Active Volunteers" },
              { value: 6, suffix: "", label: "Partner Organisations Funded" },
              { value: 9, suffix: "+", label: "Active Projects" },
            ].map((s, idx) => (
              <Reveal key={s.label} delay={idx * 80}>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  <CountUp end={s.value} suffix={s.suffix} />
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal className="rounded-3xl overflow-hidden aspect-[21/9] shadow-elevated">
          <img
            src={photos.happy}
            alt="Children smiling in community"
            className="w-full h-full object-cover"
          />
        </Reveal>
      </div>
    </section>

    <Accreditations />

    {/* PARTNER MARQUEE */}
    <section className="py-12 bg-background border-y border-border">
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

    {/* TOGETHER FOR LASTING HOPE */}
    <section className="py-16 sm:py-24 bg-background">
      <div className="container">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-2xl">
            Together for Lasting Hope and Humanity
          </h2>
          <p className="text-muted-foreground max-w-sm">
            Born in Kampala, we've grown into a global family of Arsenal supporters, donors and volunteers serving Uganda with love.
          </p>
        </Reveal>
        <div className="rounded-3xl overflow-hidden aspect-[21/9] shadow-elevated">
          <img
            src={photos.together}
            alt="Community gathering"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>

    <Testimonials />

    {/* OPPORTUNITY & EQUALITY */}
    <section className="py-16 sm:py-24 bg-secondary/40">
      <div className="container">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-primary text-xs font-bold tracking-widest uppercase">● Our Mission</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 leading-tight max-w-xl">
              Opportunity &amp; Equality for All
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            We believe every child deserves the chance to learn, grow and thrive — regardless of where they were born.
          </p>
        </Reveal>
        <div className="rounded-3xl overflow-hidden aspect-[21/9] shadow-elevated">
          <img
            src={photos.education}
            alt="Children in school uniforms"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>

    {/* FOUNDER — single profile (no image) */}
    <section className="py-16 sm:py-24 bg-background">
      <div className="container max-w-4xl">
        <Reveal className="text-center mb-10">
          <span className="text-primary text-xs font-bold tracking-widest uppercase">● Meet the Founder</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 leading-tight">
            The Heart Behind the Mission
          </h2>
        </Reveal>

        <Reveal delay={120} className="space-y-5 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold ring-1 ring-primary/20">
            <Code2 className="h-3.5 w-3.5" /> Founder · Gooner · Servant Leader
          </div>
          <h3 className="text-3xl md:text-4xl font-bold leading-tight">Andrew — Founder &amp; Lead Visionary</h3>
          <p className="text-muted-foreground leading-relaxed text-left">
            <strong>Arsenal Fund Uganda</strong> was founded in <strong>2025</strong> by Andrew — a lifelong Arsenal supporter and a son of Uganda — as a fully <strong>self-driven</strong> initiative. No big board, no corporate backers, no overhead empire. Just one conviction: that the love millions of us pour into a football club every weekend can be redirected, just a little, into the lives of children and families who need it most.
          </p>
          <p className="text-muted-foreground leading-relaxed text-left">
            What makes Arsenal Fund Uganda different is the model. Alongside our own direct programs, <strong>we also fund smaller grassroots organisations</strong> already doing brilliant, quiet, faithful work in their communities — children's homes, village schools, feeding programs and youth ministries that simply need a partner who believes in them. We listen, we vet, and then we send the resources where they will multiply fastest.
          </p>
          <p className="text-muted-foreground leading-relaxed text-left">
            "Arsenal taught me what 22 years of belief looks like. Uganda taught me what it's for." — <em>Andrew</em>
          </p>
          <div className="flex flex-wrap gap-3 pt-2 justify-center">
            <Button asChild className="rounded-full bg-primary hover:bg-primary-glow text-primary-foreground">
              <a href={donateWhatsAppUrl} target="_blank" rel="noopener noreferrer">
                Support the mission <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <a href={`tel:${INTL_PHONE}`}>
                <Globe2 className="mr-2 h-4 w-4" /> Talk to Andrew
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>

    {/* BIBLE VERSE — faith section */}
    <section className="py-16 sm:py-24 carbon hero-bg">
      <div className="container max-w-3xl text-center">
        <span className="text-primary text-xs font-bold tracking-widest uppercase">● Rooted in Faith</span>
        <blockquote className="mt-6 text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug">
          "Religion that God our Father accepts as pure and faultless is this: to look after orphans and widows in their distress…"
        </blockquote>
        <p className="mt-5 text-primary font-semibold tracking-wide">— James 1:27 (NIV)</p>
        <p className="mt-6 text-carbon-muted max-w-xl mx-auto leading-relaxed">
          We walk in this calling. Whether you give as a Christian, a Gooner, or simply someone with a generous heart — every act of love is honoured here.
        </p>
      </div>
    </section>

    {/* BE THE REASON CTA */}
    <section className="pb-16 sm:pb-24 bg-background">
      <div className="container">
        <div className="rounded-3xl overflow-hidden relative aspect-[21/10] mb-5">
          <img
            src={photos.smile}
            alt="Children at sunset"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-carbon/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10">
            <span className="text-primary text-xs font-bold tracking-widest uppercase">● Be the Reason</span>
            <h3 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl mt-2">Someone Smiles.</h3>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="rounded-3xl overflow-hidden aspect-[5/4] md:aspect-auto md:min-h-[320px]">
            <img
              src={photos.eeee}
              alt="Hands holding heart"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-3xl carbon hero-bg p-6 sm:p-8 md:p-12 flex flex-col justify-between gap-8 min-h-[280px] md:min-h-[320px]">
            <div className="flex items-start sm:items-center gap-4">
              <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-2xl bg-primary/15 ring-1 ring-primary/30 flex items-center justify-center shrink-0">
                <HeartHandshake className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              <p className="text-carbon-muted text-sm sm:text-base max-w-xs">
                Join us — every generous heart pushes the total higher.
              </p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl md:text-6xl font-black text-gradient-arsenal leading-none break-words">
                <CountUp end={24500} prefix="$" suffix="+" />
              </div>
              <p className="text-carbon-muted mt-2 text-sm sm:text-base">Raised so far — every shilling at work</p>
              <Button asChild className="mt-6 rounded-full bg-primary hover:bg-primary-glow text-primary-foreground px-6 sm:px-8 h-12 shadow-glow w-full sm:w-auto">
                <a href={donateWhatsAppUrl} target="_blank" rel="noopener noreferrer">Donate Now <ArrowRight className="ml-1 h-4 w-4" /></a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
