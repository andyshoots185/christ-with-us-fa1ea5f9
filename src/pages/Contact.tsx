import { Mail, Phone, MapPin } from "lucide-react";
import { z } from "zod";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { toast } from "@/hooks/use-toast";
import { faqs } from "@/data/content";
import { photos } from "@/data/images";

const schema = z.object({
  firstName: z.string().trim().min(1, "First name required").max(80),
  lastName: z.string().trim().min(1, "Last name required").max(80),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().max(40).optional(),
  notes: z.string().trim().min(1, "Message required").max(1000),
});

const infoItems = [
  { icon: Mail, label: "Our Mail", value: "hello@arsenalfunduganda.org" },
  { icon: Phone, label: "Our Contact", value: "+256 703 639 277" },
  { icon: MapPin, label: "Our Address", value: "Kampala, Uganda" },
];

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const result = schema.safeParse(data);
    if (!result.success) {
      toast({ title: "Please check your details", description: result.error.errors[0].message, variant: "destructive" });
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast({ title: "Message sent!", description: "We'll be in touch soon — thank you for reaching out." });
      form.reset();
      setSubmitting(false);
    }, 700);
  };

  return (
    <Layout>
      <PageHero
        tag="Contact"
        title="Reach Out. We're Here Always."
        subtitle="Have questions, ideas, or need support? Connect with us — we're ready to listen and help."
        image={photos.together}
      />

      <section className="py-20 bg-secondary/40">
        <div className="container">
          <div className="rounded-3xl overflow-hidden aspect-[21/8] mb-10 shadow-elevated">
            <img
              src={photos.smile}
              alt="Children smiling — community in Kampala"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-10">
            {infoItems.map((it, idx) => (
              <Reveal key={it.label} delay={idx * 100} className="bg-card rounded-2xl p-5 flex items-center gap-5 shadow-card border border-border">
                <div className="h-12 w-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                  <it.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-bold">{it.label}</div>
                  <div className="text-muted-foreground text-sm">{it.value}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="bg-card rounded-3xl p-8 md:p-10 shadow-card border border-border">
            <h2 className="text-primary font-bold mb-6">Contact Information</h2>
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" name="firstName" placeholder="Jane" className="rounded-full bg-secondary border-transparent h-12 px-5" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" name="lastName" placeholder="Smith" className="rounded-full bg-secondary border-transparent h-12 px-5" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="jane@email.com" className="rounded-full bg-secondary border-transparent h-12 px-5" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Contact Number</Label>
                <Input id="phone" name="phone" placeholder="+256 ..." className="rounded-full bg-secondary border-transparent h-12 px-5" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea id="notes" name="notes" placeholder="Let's work together!" className="rounded-2xl bg-secondary border-transparent min-h-32 px-5 py-4" required />
              </div>
              <div className="md:col-span-2">
                <Button type="submit" disabled={submitting} className="w-full rounded-full bg-primary hover:bg-primary-glow text-primary-foreground h-13 py-3 font-semibold shadow-glow">
                  {submitting ? "Sending..." : "Submit"}
                </Button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container grid lg:grid-cols-[1fr_1.4fr] gap-12">
          <Reveal>
            <span className="text-primary text-xs font-bold tracking-widest uppercase">● FAQ</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 leading-tight">
              What You're Thinking,<br/>We've Answered.
            </h2>
            <p className="mt-5 text-muted-foreground max-w-md">
              Find helpful answers to common questions about donating, volunteering and fundraising.
            </p>
          </Reveal>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`f-${i}`} className="bg-secondary/60 rounded-2xl px-6 border-none">
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

export default Contact;
