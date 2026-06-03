import { Calendar, MapPin, Users, Trophy, HeartHandshake, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { photos } from "@/data/images";

type EventItem = {
  date: string;
  title: string;
  type: "Fundraiser" | "Outreach" | "Football" | "Members";
  location: string;
  desc: string;
  image: string;
  icon: typeof Trophy;
  highlight?: boolean;
};

const events: EventItem[] = [
  {
    date: "Mar 15, 2026",
    title: "Red & White Charity Gala",
    type: "Fundraiser",
    location: "Sheraton Kampala Hotel",
    desc: "Our flagship black-tie gala raising funds for the 2026 education scholarship cohort.",
    image: photos.together,
    icon: HeartHandshake,
    highlight: true,
  },
  {
    date: "Apr 02, 2026",
    title: "Mukono Community Outreach",
    type: "Outreach",
    location: "Mukono District",
    desc: "Medical camp, school supply distribution and meal service to 400 families.",
    image: photos.health,
    icon: Users,
  },
  {
    date: "May 18, 2026",
    title: "Gunners Cup — Youth Football Tournament",
    type: "Football",
    location: "Namboole Stadium",
    desc: "16-team U-17 tournament. Winners receive a year of academy training and full kit.",
    image: photos.smile,
    icon: Trophy,
  },
  {
    date: "Jun 07, 2026",
    title: "Members Match-Day Brunch",
    type: "Members",
    location: "AFU Clubhouse, Ntinda",
    desc: "Watch the North London Derby with fellow members. Brunch + raffle for charity.",
    image: photos.eeee,
    icon: Users,
  },
  {
    date: "Jul 20, 2026",
    title: "Back-to-School Drive",
    type: "Outreach",
    location: "Wakiso District",
    desc: "Distributing 1,200 school kits to children entering Term 3.",
    image: photos.scholar,
    icon: HeartHandshake,
  },
  {
    date: "Aug 12, 2026",
    title: "5K Run for Uganda",
    type: "Fundraiser",
    location: "Lake Victoria Lakefront",
    desc: "Family-friendly 5K. Every entry funds one child's full term of school.",
    image: photos.together,
    icon: Trophy,
  },
];

const Events = () => (
  <Layout>
    <PageHero
      tag="Events"
      title="Where Arsenal fans meet impact."
      subtitle="Fundraisers, outreach drives, football tournaments and member gatherings — there's always a way to show up."
      image={photos.smile}
    />

    <section className="py-20 bg-background">
      <div className="container">
        <Reveal className="mb-12 max-w-2xl">
          <span className="text-primary text-xs font-bold tracking-widest uppercase">● Upcoming</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3">2026 calendar</h2>
          <p className="mt-4 text-muted-foreground">
            Save the dates. Members get early-bird access and free entry to selected events.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((e, i) => (
            <Reveal key={e.title} delay={i * 80}>
              <article
                className={`group rounded-3xl overflow-hidden border transition-all h-full flex flex-col ${
                  e.highlight
                    ? "border-primary shadow-glow"
                    : "border-border shadow-card hover:shadow-elevated"
                }`}
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={e.image}
                    alt={e.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    {e.type}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 text-primary" /> {e.date}
                  </div>
                  <h3 className="mt-3 text-xl font-bold leading-snug">{e.title}</h3>
                  <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" /> {e.location}
                  </div>
                  <p className="mt-3 text-muted-foreground text-sm flex-1">{e.desc}</p>
                  <Button asChild variant="ghost" className="mt-5 px-0 self-start text-primary hover:text-primary-glow">
                    <Link to="/contact">Reserve a spot <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 carbon">
      <div className="container text-center max-w-2xl mx-auto">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-bold text-white">Host an event for us</h2>
          <p className="mt-4 text-carbon-muted">
            Run a pub quiz, charity match or local drive in your community — we'll provide branding, media kit and on-the-ground support.
          </p>
          <Button asChild size="lg" className="mt-8 rounded-full bg-primary hover:bg-primary-glow shadow-glow">
            <Link to="/contact">Partner with us <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </Reveal>
      </div>
    </section>
  </Layout>
);

export default Events;
