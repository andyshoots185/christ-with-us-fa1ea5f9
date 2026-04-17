import Layout from "@/components/layout/Layout";
import PageHero from "@/components/PageHero";
import { stories } from "@/data/content";

const Blog = () => (
  <Layout>
    <PageHero
      tag="Blog"
      title="Latest Stories That Inspire Hope"
      subtitle="Explore meaningful updates, community highlights and real stories from the ground."
    />
    <section className="py-20 bg-secondary/40">
      <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((s) => (
          <a key={s.slug} href="#" className="group bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-elevated transition-all border border-border">
            <div className="aspect-[4/3] overflow-hidden relative">
              <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[900ms] ease-out" />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                {s.category}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg leading-snug group-hover:text-primary transition-colors">{s.title}</h3>
              <div className="mt-3 text-sm text-muted-foreground">{s.date}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  </Layout>
);

export default Blog;
