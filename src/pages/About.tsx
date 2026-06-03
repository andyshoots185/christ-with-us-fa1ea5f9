import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/PageHero";
import CountUp from "@/components/CountUp";
import Reveal from "@/components/Reveal";
import Testimonials from "@/components/Testimonials";
import Accreditations from "@/components/Accreditations";
import { Button } from "@/components/ui/button";
import { ArrowRight, HeartHandshake } from "lucide-react";
import { partners } from "@/data/content";
import { photos, team as teamPhotos } from "@/data/images";

const team = [
  {
    name: "Dan",
    role: "Founder & CEO",
    image: teamPhotos.dan,
    span: "lg:col-span-2 aspect-[16/9]",
  },
  {
    name: "Anne",
    role: "Programs Director",
    image: teamPhotos.anne,
    span: "aspect-[4/5]",
  },
  {
    name: "Lily",
    role: "Community Lead",
    image: teamPhotos.lily,
    span: "aspect-[4/5]",
  },
  {
    name: "Imanji & Team",
    role: "Partnerships & Legacy",
    image: teamPhotos.legacyGroup,
    span: "lg:col-span-2 aspect-[16/9]",
  },
  {
    name: "Anne",
    role: "Health & Outreach",
    image: teamPhotos.anne,
    span: "aspect-[4/5]",
  },
  {
    name: "Dan",
    role: "Field Coordinator",
    image: teamPhotos.dan,
    span: "aspect-[4/5]",
  },
];

const About = () => (
  <Layout>
    <PageHero
      tag="About"
      title="Driven By Purpose And Impact"
      subtitle="A purpose-driven nonprofit organization working to create lasting change in communities across Uganda."
      image={photos.together}
    />

    {/* STATS + FEATURED IMAGE */}
    <section className="py-20 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 items-end mb-12">
          <Reveal as="p" className="text-muted-foreground max-w-md">
            A purpose-driven nonprofit organization working to create lasting change in communities.
          </Reveal>
          <div className="grid grid-cols-2 gap-8">
            {[
              { value: 11000, suffix: "+", label: "Lives Impacted" },
              { value: 240, suffix: "+", label: "Active Volunteers" },
              { value: 1200, suffix: "+", label: "Meals Delivered" },
              { value: 62, suffix: "+", label: "Active Projects" },
            ].map((s, idx) => (
              <Reveal key={s.label} delay={idx * 80}>
                <div className="text-3xl md:text-4xl font-bold">
                  <CountUp end={s.value} suffix={s.suffix} />
                </div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
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
    <section className="py-24 bg-background">
      <div className="container">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-2xl">
            Together for Lasting Hope and Humanity
          </h2>
          <p className="text-muted-foreground max-w-sm">
            Born in Kampala in 2014, we've grown into a global family of donors, volunteers and dreamers serving Uganda with love.
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
    <section className="py-24 bg-secondary/40">
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

    {/* OUR LEGACY IN MOTION — team grid */}
    <section className="py-24 bg-background">
      <div className="container">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-primary text-xs font-bold tracking-widest uppercase">● Our Team</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 leading-tight max-w-xl">
              Our Legacy in Motion
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            The hands, hearts and minds keeping our mission alive across Uganda and beyond.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-5">
          {team.map((m, idx) => (
            <Reveal key={m.name} delay={idx * 80} as="article" className={`group relative rounded-3xl overflow-hidden ${m.span}`}>
              <img src={m.image} alt={m.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon/80 via-carbon/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-bold text-lg">{m.name}</h3>
                <p className="text-carbon-muted text-sm">{m.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* BE THE REASON CTA */}
    <section className="pb-24 bg-background">
      <div className="container">
        <div className="rounded-3xl overflow-hidden relative aspect-[21/10] mb-5">
          <img
            src={photos.smile}
            alt="Children at sunset"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-carbon/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
            <span className="text-primary text-xs font-bold tracking-widest uppercase">● Be the Reason</span>
            <h3 className="text-white font-bold text-3xl md:text-4xl mt-2">Someone Smiles.</h3>
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
          <div className="rounded-3xl carbon hero-bg p-10 md:p-12 flex flex-col justify-between min-h-[320px]">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-2xl bg-primary/15 ring-1 ring-primary/30 flex items-center justify-center">
                <HeartHandshake className="h-8 w-8 text-primary" />
              </div>
              <p className="text-carbon-muted max-w-xs">
                Join us — every generous heart pushes the total higher.
              </p>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-black text-gradient-arsenal leading-none">
                <CountUp end={1660000} prefix="$" suffix="+" />
              </div>
              <p className="text-carbon-muted mt-2">Raised globally this year</p>
              <Button asChild className="mt-6 rounded-full bg-primary hover:bg-primary-glow text-primary-foreground px-8 h-12 shadow-glow w-full md:w-auto">
                <Link to="/donate">Donate Now <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
