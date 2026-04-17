import { Quote } from "lucide-react";
import Reveal from "@/components/Reveal";
import { testimonials } from "@/data/content";

const Testimonials = () => (
  <section className="py-24 bg-background">
    <div className="container">
      <Reveal className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-primary text-xs font-bold tracking-widest uppercase">● Voices of Impact</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3 leading-tight">
          Real People. Real Change.
        </h2>
        <p className="mt-5 text-muted-foreground">
          Stories from the families, volunteers and partners walking this mission with us.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 120} as="article" className="bg-card rounded-3xl p-7 border border-border shadow-card hover:shadow-elevated transition-all relative">
            <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/15" />
            <p className="text-foreground/90 leading-relaxed">"{t.quote}"</p>
            <div className="mt-6 flex items-center gap-4">
              <img src={t.image} alt={t.name} loading="lazy" className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/20" />
              <div>
                <div className="font-bold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
