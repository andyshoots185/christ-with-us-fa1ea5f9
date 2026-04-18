import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search, HelpCircle, ShieldCheck, HeartHandshake, Users, Sparkles, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/PageHero";
import { photos } from "@/data/images";
import Reveal from "@/components/Reveal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const categories = [
  {
    id: "general",
    label: "General",
    icon: HelpCircle,
    items: [
      {
        q: "What is Christ With Us?",
        a: "Christ With Us is a Kampala-based, faith-driven nonprofit working to bring hope, education, healthcare, clean water and dignity to vulnerable communities across Uganda.",
      },
      {
        q: "Where do you operate?",
        a: "Our headquarters are in Kampala, Uganda. We run programs across central, eastern and northern Uganda — and partner with churches and community groups in over 40 villages.",
      },
      {
        q: "How long has the organization existed?",
        a: "We were founded over a decade ago by a small group of volunteers. Today we are a registered nonprofit with full-time staff and hundreds of volunteers worldwide.",
      },
    ],
  },
  {
    id: "donations",
    label: "Donations",
    icon: HeartHandshake,
    items: [
      {
        q: "How are donations used?",
        a: "85% of every donation goes directly to programs on the ground. The remaining 15% covers operations, transparent reporting and infrastructure that keeps our impact compounding.",
      },
      {
        q: "Are donations tax-deductible?",
        a: "Yes — donations made through our verified channels are tax-deductible in Uganda, the US, the UK and the EU. A receipt is issued automatically by email after each gift.",
      },
      {
        q: "Can I set up a monthly donation?",
        a: "Absolutely. Monthly giving is the most powerful way to support us — it helps us plan long-term programs. You can pause, change or cancel anytime from your donor dashboard.",
      },
      {
        q: "Can I sponsor a child or family?",
        a: "Yes. Monthly sponsorships start at $35 and cover school fees, meals and healthcare for a child for a full month. You'll receive personal updates on the child you sponsor.",
      },
    ],
  },
  {
    id: "volunteer",
    label: "Volunteer",
    icon: Users,
    items: [
      {
        q: "Can I volunteer?",
        a: "Absolutely — we welcome volunteers locally and internationally. Apply through our Contact page and our team will match you to a project that fits your skills.",
      },
      {
        q: "Do you accept international volunteers?",
        a: "Yes. We host international volunteers year-round. We provide an orientation, a safe community environment and on-the-ground coordination throughout your stay.",
      },
      {
        q: "What skills are most useful?",
        a: "Teachers, medical professionals, builders, photographers, social-media storytellers and anyone with a willing heart — every skill multiplies impact in the field.",
      },
    ],
  },
  {
    id: "trust",
    label: "Trust & Safety",
    icon: ShieldCheck,
    items: [
      {
        q: "How do you ensure transparency?",
        a: "We publish an annual impact report with audited financials, project-level spending and verified outcomes. All major donors receive quarterly updates with photos and metrics.",
      },
      {
        q: "Is my payment information secure?",
        a: "Payments are processed through PCI-DSS compliant providers (Stripe, Flutterwave). We never store card details on our servers and use bank-grade encryption end-to-end.",
      },
      {
        q: "How do you safeguard the children in your programs?",
        a: "We follow a strict child-protection policy: background-checked staff, supervised interactions, and a zero-tolerance reporting framework reviewed annually by independent auditors.",
      },
    ],
  },
];

const Faq = () => {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<string>("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return categories
      .filter((c) => active === "all" || c.id === active)
      .map((c) => ({
        ...c,
        items: c.items.filter(
          (it) => !q || it.q.toLowerCase().includes(q) || it.a.toLowerCase().includes(q)
        ),
      }))
      .filter((c) => c.items.length > 0);
  }, [query, active]);

  return (
    <Layout>
      <PageHero
        tag="● Help Center"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about our mission, your impact, and how we keep your trust."
        image={photos.school}
      />

      {/* SEARCH + FILTER */}
      <section className="py-16 bg-background">
        <div className="container max-w-5xl">
          <Reveal className="relative max-w-2xl mx-auto">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions..."
              className="h-14 rounded-full pl-14 pr-5 text-base bg-card border-border shadow-card"
            />
          </Reveal>

          <Reveal delay={120} className="mt-8 flex flex-wrap justify-center gap-2">
            {[{ id: "all", label: "All", icon: Sparkles }, ...categories].map((c) => {
              const Icon = c.icon;
              const isActive = active === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setActive(c.id)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-glow"
                      : "bg-secondary text-foreground hover:bg-secondary/70"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {c.label}
                </button>
              );
            })}
          </Reveal>
        </div>
      </section>

      {/* QUESTIONS */}
      <section className="pb-24 bg-background">
        <div className="container max-w-4xl space-y-12">
          {filtered.length === 0 && (
            <Reveal className="text-center text-muted-foreground py-12">
              No results for "{query}". Try a different keyword.
            </Reveal>
          )}

          {filtered.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 80}>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary">
                  <cat.icon className="h-5 w-5" />
                </span>
                <h2 className="text-2xl font-bold">{cat.label}</h2>
              </div>
              <Accordion type="single" collapsible className="bg-card rounded-3xl border border-border shadow-card px-6">
                {cat.items.map((it, idx) => (
                  <AccordionItem
                    key={it.q}
                    value={`${cat.id}-${idx}`}
                    className="border-border last:border-b-0"
                  >
                    <AccordionTrigger className="text-left font-semibold text-base hover:no-underline">
                      {it.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {it.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          ))}
        </div>
      </section>

      {/* STILL HAVE QUESTIONS CTA */}
      <section className="pb-24 bg-background">
        <div className="container max-w-5xl">
          <Reveal>
            <div className="carbon rounded-[32px] p-10 md:p-14 relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-primary/30 blur-3xl" />
              <div className="relative grid md:grid-cols-[1.5fr_1fr] gap-8 items-center">
                <div>
                  <span className="text-primary text-xs font-bold tracking-widest uppercase">● Still curious?</span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mt-3 leading-tight">
                    Can't find what you're looking for?
                  </h3>
                  <p className="text-carbon-muted mt-4 max-w-md">
                    Our team replies to every message — usually within one business day.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 md:justify-end">
                  <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary-glow text-primary-foreground shadow-glow">
                    <Link to="/contact">Contact Us <ArrowRight className="ml-1 h-4 w-4" /></Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-full bg-transparent border-white/20 text-white hover:bg-white hover:text-carbon">
                    <Link to="/donate">Donate</Link>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default Faq;
