import { Link } from "react-router-dom";
import { useState } from "react";
import { z } from "zod";
import { Check, Crown, Users, Trophy, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { photos } from "@/data/images";
import { toast } from "@/hooks/use-toast";

const tiers = [
  {
    name: "Supporter",
    price: "$165",
    cadence: "/ year",
    icon: Users,
    perks: [
      "Member welcome pack",
      "Monthly newsletter",
      "Match-day fan meetups",
      "Volunteer opportunities",
    ],
  },
  {
    name: "Gunner",
    price: "$300",
    cadence: "/ year",
    icon: Trophy,
    featured: true,
    perks: [
      "Everything in Supporter",
      "Branded Arsenal Fund jersey",
      "Priority event invitations",
      "Quarterly impact reports",
      "Vote on community projects",
    ],
  },
  {
    name: "Legacy",
    price: "$750",
    cadence: "/ year",
    icon: Crown,
    perks: [
      "Everything in Gunner",
      "Recognition on our donor wall",
      "Annual gala dinner seat",
      "Direct sponsor a child program",
      "Founders' circle membership",
    ],
  },
];

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(7).max(20),
  tier: z.string(),
});

const Membership = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", tier: "Gunner" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      toast({ title: "Check your details", description: r.error.errors[0].message, variant: "destructive" });
      return;
    }
    const list = JSON.parse(localStorage.getItem("afu_members") || "[]");
    list.push({ ...r.data, ts: Date.now() });
    localStorage.setItem("afu_members", JSON.stringify(list));
    toast({ title: "Welcome to the family 🔴⚪", description: "We'll be in touch within 48 hours to confirm your membership." });
    setForm({ name: "", email: "", phone: "", tier: "Gunner" });
  };

  return (
    <Layout>
      <PageHero
        tag="Membership"
        title="Wear the red. Change a life."
        subtitle="Join thousands of Arsenal supporters across Uganda turning passion for football into lasting impact."
        image={photos.together}
      />

      <section className="py-20 bg-background">
        <div className="container">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-primary text-xs font-bold tracking-widest uppercase">● Choose your tier</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3">Three ways to belong</h2>
            <p className="mt-4 text-muted-foreground">
              Every membership directly funds programs across Uganda. Cancel anytime — but most of our family stays for life.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <article
                  className={`relative rounded-3xl p-8 h-full flex flex-col border transition-all ${
                    t.featured
                      ? "bg-carbon text-white border-primary shadow-glow scale-[1.02]"
                      : "bg-card border-border shadow-card hover:shadow-elevated"
                  }`}
                >
                  {t.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                      Most popular
                    </span>
                  )}
                  <t.icon className={`h-9 w-9 ${t.featured ? "text-primary" : "text-primary"}`} />
                  <h3 className="mt-4 text-2xl font-bold">{t.name}</h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{t.price}</span>
                    <span className={t.featured ? "text-white/60" : "text-muted-foreground"}>{t.cadence}</span>
                  </div>
                  <ul className="mt-6 space-y-3 flex-1">
                    {t.perks.map((p) => (
                      <li key={p} className="flex gap-2 text-sm">
                        <Check className="h-5 w-5 text-primary shrink-0" />
                        <span className={t.featured ? "text-white/85" : ""}>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => setForm((f) => ({ ...f, tier: t.name }))}
                    className={`mt-8 rounded-full ${
                      t.featured
                        ? "bg-primary hover:bg-primary-glow"
                        : "bg-foreground text-background hover:bg-foreground/90"
                    }`}
                  >
                    Select {t.name}
                  </Button>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 carbon">
        <div className="container grid lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <span className="text-primary text-xs font-bold tracking-widest uppercase">● Register</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">Become a member today</h2>
            <p className="mt-5 text-carbon-muted max-w-md">
              Fill in the form and our team will reach out within 48 hours to welcome you and process your tier.
            </p>
            <div className="mt-8 space-y-4 text-carbon-muted">
              <p>✓ 100% of membership fees fund community programs.</p>
              <p>✓ Transparent quarterly reporting.</p>
              <p>✓ Cancel any time, no questions asked.</p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={submit}
              className="bg-carbon-elevated rounded-3xl p-8 border border-white/10 space-y-5"
            >
              <div>
                <Label htmlFor="m-name" className="text-white">Full name</Label>
                <Input
                  id="m-name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-2 bg-carbon border-white/15 text-white"
                  required
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="m-email" className="text-white">Email</Label>
                  <Input
                    id="m-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-2 bg-carbon border-white/15 text-white"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="m-phone" className="text-white">Phone</Label>
                  <Input
                    id="m-phone"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="mt-2 bg-carbon border-white/15 text-white"
                    required
                  />
                </div>
              </div>
              <div>
                <Label className="text-white">Selected tier</Label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {tiers.map((t) => (
                    <button
                      key={t.name}
                      type="button"
                      onClick={() => setForm({ ...form, tier: t.name })}
                      className={`px-4 py-2 rounded-full text-sm border transition-all ${
                        form.tier === t.name
                          ? "bg-primary border-primary text-primary-foreground"
                          : "border-white/15 text-carbon-muted hover:text-white"
                      }`}
                    >
                      {t.name}
                    </button>
                  ))}
                </div>
              </div>
              <Button type="submit" size="lg" className="w-full rounded-full bg-primary hover:bg-primary-glow shadow-glow">
                Join Arsenal Fund Uganda <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <p className="text-xs text-carbon-muted text-center">
                By joining you agree to our <Link to="/contact" className="underline">terms</Link>.
              </p>
            </form>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default Membership;
