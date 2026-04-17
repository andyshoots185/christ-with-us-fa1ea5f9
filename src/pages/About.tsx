import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Sparkles, Users } from "lucide-react";

const About = () => (
  <Layout>
    <PageHero
      tag="About"
      title="Driven By Purpose And Impact"
      subtitle="A purpose-driven nonprofit organization working to create lasting change in communities across Uganda."
    />
    <section className="py-20 bg-background">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-elevated">
          <img src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1400&q=80" alt="Community" className="w-full h-full object-cover" />
        </div>
        <div>
          <span className="text-primary text-xs font-bold tracking-widest uppercase">● Our Story</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 leading-tight">Together for Lasting Hope and Humanity</h2>
          <p className="mt-5 text-muted-foreground">
            Born in Kampala in 2014, Christ With Us began as a small circle of volunteers serving meals in their neighbourhood. Today we operate programs across Uganda — but our heart remains the same: walking with people, never above them.
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {[
              { icon: Heart, num: "11k+", label: "Lives" },
              { icon: Users, num: "240+", label: "Volunteers" },
              { icon: Sparkles, num: "62+", label: "Active Projects" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl bg-secondary/60 p-5">
                <s.icon className="h-6 w-6 text-primary mb-3" />
                <div className="text-2xl font-bold">{s.num}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
          <Button asChild className="mt-8 rounded-full bg-primary hover:bg-primary-glow text-primary-foreground px-7 h-12 shadow-glow">
            <Link to="/donate">Support our work <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
