import { useState } from "react";
import { z } from "zod";
import { HeartHandshake, Users, BookOpen, Megaphone, Stethoscope, Trophy, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { photos } from "@/data/images";
import { toast } from "@/hooks/use-toast";

const areas = [
  { icon: BookOpen, title: "Education & tutoring", desc: "After-school tutoring, literacy clubs and exam prep mentoring." },
  { icon: Stethoscope, title: "Healthcare camps", desc: "Support our mobile clinics in triage, registration and outreach." },
  { icon: HeartHandshake, title: "Food relief", desc: "Pack and distribute weekly meals to vulnerable families." },
  { icon: Trophy, title: "Youth football coaching", desc: "Coach kids at the Arsenal Fund academy — kits provided." },
  { icon: Megaphone, title: "Marketing & media", desc: "Help tell our story — photography, writing, video, social." },
  { icon: Users, title: "Events crew", desc: "On-the-day logistics, registration and hospitality at our events." },
];

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(7).max(20),
  area: z.string().min(1),
  availability: z.string().min(1).max(200),
  message: z.string().trim().max(1000),
});

const Volunteer = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    area: "Education & tutoring",
    availability: "",
    message: "",
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      toast({ title: "Please check the form", description: r.error.errors[0].message, variant: "destructive" });
      return;
    }
    const list = JSON.parse(localStorage.getItem("afu_volunteers") || "[]");
    list.push({ ...r.data, ts: Date.now() });
    localStorage.setItem("afu_volunteers", JSON.stringify(list));
    toast({ title: "Thank you 🙏", description: "Our volunteer coordinator will reach out within 5 working days." });
    setForm({ name: "", email: "", phone: "", area: "Education & tutoring", availability: "", message: "" });
  };

  return (
    <Layout>
      <PageHero
        tag="Volunteer"
        title="Give your time. Change a story."
        subtitle="Whether you have an hour a week or a weekend a month — your skills can rebuild a child's tomorrow."
        image={photos.eeee}
      />

      <section className="py-20 bg-background">
        <div className="container">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-primary text-xs font-bold tracking-widest uppercase">● Areas of service</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3">Where you can help</h2>
            <p className="mt-4 text-muted-foreground">Pick what matches your skills and schedule.</p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {areas.map((a, i) => (
              <Reveal key={a.title} delay={i * 70}>
                <div className="bg-card border border-border rounded-3xl p-7 hover:shadow-elevated hover:border-primary/40 transition-all h-full">
                  <a.icon className="h-9 w-9 text-primary" />
                  <h3 className="mt-4 text-lg font-bold">{a.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 carbon">
        <div className="container grid lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <span className="text-primary text-xs font-bold tracking-widest uppercase">● Sign up</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">Tell us about you</h2>
            <p className="mt-5 text-carbon-muted max-w-md">
              We onboard new volunteers monthly with training, a kit and a community lead. No experience required.
            </p>
            <ul className="mt-8 space-y-3 text-carbon-muted">
              <li>✓ Free training and certificate after 20 hours</li>
              <li>✓ Reimbursed transport on outreach days</li>
              <li>✓ Welcome into our Arsenal Fund family</li>
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={submit} className="bg-carbon-elevated rounded-3xl p-8 border border-white/10 space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="v-name" className="text-white">Full name</Label>
                  <Input id="v-name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="mt-2 bg-carbon border-white/15 text-white" />
                </div>
                <div>
                  <Label htmlFor="v-phone" className="text-white">Phone</Label>
                  <Input id="v-phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required className="mt-2 bg-carbon border-white/15 text-white" />
                </div>
              </div>
              <div>
                <Label htmlFor="v-email" className="text-white">Email</Label>
                <Input id="v-email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="mt-2 bg-carbon border-white/15 text-white" />
              </div>
              <div>
                <Label className="text-white">Area of service</Label>
                <select
                  value={form.area}
                  onChange={(e) => setForm({ ...form, area: e.target.value })}
                  className="mt-2 w-full h-10 rounded-md bg-carbon border border-white/15 text-white px-3"
                >
                  {areas.map((a) => <option key={a.title}>{a.title}</option>)}
                </select>
              </div>
              <div>
                <Label htmlFor="v-avail" className="text-white">Availability</Label>
                <Input id="v-avail" placeholder="e.g. Weekends, 4 hrs/week" value={form.availability} onChange={(e) => setForm({ ...form, availability: e.target.value })} required className="mt-2 bg-carbon border-white/15 text-white" />
              </div>
              <div>
                <Label htmlFor="v-msg" className="text-white">Anything else?</Label>
                <Textarea id="v-msg" rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-2 bg-carbon border-white/15 text-white" />
              </div>
              <Button type="submit" size="lg" className="w-full rounded-full bg-primary hover:bg-primary-glow shadow-glow">
                Submit application <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default Volunteer;
