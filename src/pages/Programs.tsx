import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/PageHero";
import ProgressBar from "@/components/ProgressBar";
import { Button } from "@/components/ui/button";
import { causes } from "@/data/content";

const formatMoney = (n: number) => `$${n.toLocaleString()}`;

const Programs = () => (
  <Layout>
    <PageHero
      tag="Programs"
      title="Programs That Make a Difference"
      subtitle="Programs that uplift communities through education, healthcare and live support."
    />
    <section className="py-20 bg-secondary/40">
      <div className="container space-y-6">
        {causes.map((c) => (
          <article key={c.slug} className="bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-elevated transition-all border border-border grid md:grid-cols-[420px_1fr]">
            <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
              <img src={c.image} alt={c.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <span className="self-start inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-3">
                {c.category}
              </span>
              <h3 className="font-bold text-2xl md:text-3xl leading-tight">{c.title}</h3>
              <p className="mt-3 text-muted-foreground max-w-xl">{c.excerpt}</p>

              <div className="mt-6 grid grid-cols-2 gap-6 max-w-md">
                <div>
                  <div className="text-muted-foreground text-xs">Raised Amount</div>
                  <div className="font-bold text-lg">{formatMoney(c.raised)}</div>
                </div>
                <div>
                  <div className="text-muted-foreground text-xs">Goal Amount</div>
                  <div className="font-bold text-lg">{formatMoney(c.goal)}</div>
                </div>
              </div>
              <ProgressBar raised={c.raised} goal={c.goal} className="mt-4 max-w-md" />

              <Button asChild className="mt-7 self-start rounded-full bg-foreground text-background hover:bg-primary hover:text-primary-foreground">
                <Link to="/donate">Learn More <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  </Layout>
);

export default Programs;
