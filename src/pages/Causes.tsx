import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/PageHero";
import ProgressBar from "@/components/ProgressBar";
import { Button } from "@/components/ui/button";
import { causes } from "@/data/content";

const formatMoney = (n: number) => `$${n.toLocaleString()}`;

const Causes = () => (
  <Layout>
    <PageHero
      tag="Causes"
      title="Support What Matters Most"
      subtitle="We address urgent community needs through health, education, livelihoods and disaster relief."
      image="https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=2000&q=80"
    />
    <section className="py-20 bg-secondary/40">
      <div className="container grid md:grid-cols-2 gap-7">
        {causes.map((c) => (
          <article key={c.slug} className="group bg-card rounded-[28px] overflow-hidden shadow-card hover:shadow-elevated transition-all border border-border p-3">
            <div className="aspect-[16/11] overflow-hidden rounded-2xl">
              <img src={c.image} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="px-4 pt-6 pb-4">
              <h3 className="font-bold text-xl leading-snug">{c.title}</h3>
              <div className="mt-5 pt-5 border-t border-border flex justify-between text-sm">
                <div>
                  <div className="text-muted-foreground text-xs mb-1">Raised Amount</div>
                  <div className="font-bold text-base">{formatMoney(c.raised)}</div>
                </div>
                <div className="text-right">
                  <div className="text-muted-foreground text-xs mb-1">Goal Amount</div>
                  <div className="font-bold text-base">{formatMoney(c.goal)}</div>
                </div>
              </div>
              <Button asChild variant="outline" className="mt-5 rounded-full w-full border-foreground/15 hover:bg-primary hover:text-primary-foreground hover:border-primary">
                <Link to="/donate">Learn More <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  </Layout>
);

export default Causes;
