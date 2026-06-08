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
      subtitle="A purpose-driven nonprofit organization working to create lasting change in communities across Uganda."
      image={photos.together}
    />

    {/* STATS + FEATURED IMAGE */}
    <section className="py-16 sm:py-20 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 items-end mb-10 sm:mb-12">
          <Reveal as="p" className="text-muted-foreground max-w-md">
            A purpose-driven nonprofit organization working to create lasting change in communities.
          </Reveal>
          <div className="grid grid-cols-2 gap-6 sm:gap-8">
            {[
              { value: 11000, suffix: "+", label: "Lives Impacted" },
              { value: 240, suffix: "+", label: "Active Volunteers" },
              { value: 1200, suffix: "+", label: "Meals Delivered" },
              { value: 62, suffix: "+", label: "Active Projects" },
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

    {/* FOUNDER — single profile */}
    <section className="py-16 sm:py-24 bg-background">
      <div className="container">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <span className="text-primary text-xs font-bold tracking-widest uppercase">● Meet the Founder</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 leading-tight max-w-xl">
              The Heart Behind the Mission
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            One developer, one football club, one country — and an unshakable belief that technology and compassion can rewrite a child's future.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6 sm:gap-10 items-center">
          <Reveal className="rounded-3xl overflow-hidden aspect-[4/5] shadow-elevated">
            <img
              src={teamPhotos.dan}
              alt="Dan — Founder of Arsenal Fund Uganda"
              className="w-full h-full object-cover"
            />
          </Reveal>

          <Reveal delay={120} className="space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold ring-1 ring-primary/20">
              <Code2 className="h-3.5 w-3.5" /> Founder · Developer · Gooner
            </div>
            <h3 className="text-3xl md:text-4xl font-bold leading-tight">Dan — Founder &amp; Lead Visionary</h3>
            <p className="text-muted-foreground leading-relaxed">
              Dan is a software engineer at a leading web development agency, where he builds products used by thousands every day. But long before code, there was football — and long before football, there was Uganda. <strong>Arsenal Fund Uganda</strong> is the bridge between his two greatest loves: the precision of modern engineering and the unbreakable spirit of his community.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Born and raised in Kampala, Dan watched too many talented children fall through the cracks — not because they lacked dreams, but because they lacked a chance. As a lifelong Arsenal supporter, he saw what 22 years of unwavering belief can finally deliver. He's applying that same patient, principled belief here — using his platform, his skills and the global Arsenal family to lift Uganda's most vulnerable, one child, one meal, one scholarship at a time.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              "I build software for a living. But this — this is what I was actually built for."
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild className="rounded-full bg-primary hover:bg-primary-glow text-primary-foreground">
                <a href={donateWhatsAppUrl} target="_blank" rel="noopener noreferrer">
                  Support the mission <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <a href={`tel:${INTL_PHONE}`}>
                  <Linkedin className="mr-2 h-4 w-4 hidden" />
                  <Globe2 className="mr-2 h-4 w-4" /> Talk to Dan
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
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
                <CountUp end={1660000} prefix="$" suffix="+" />
              </div>
              <p className="text-carbon-muted mt-2 text-sm sm:text-base">Raised globally this year</p>
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
