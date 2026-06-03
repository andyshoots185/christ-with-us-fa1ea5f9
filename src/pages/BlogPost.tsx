import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowRight, ArrowLeft, Calendar, User } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { stories } from "@/data/content";

const BlogPost = () => {
  const { slug } = useParams();
  const post = stories.find((s) => s.slug === slug);
  if (!post) return <Navigate to="/blog" replace />;
  const related = stories.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <Layout>
      <PageHero tag={post.category} title={post.title} subtitle={`${post.author ?? "Arsenal Fund Uganda"} · ${post.date}`} image={post.image} />

      <section className="py-20 bg-background">
        <div className="container max-w-3xl">
          <Button asChild variant="ghost" className="px-0 text-primary hover:text-primary-glow mb-6">
            <Link to="/blog"><ArrowLeft className="mr-1 h-4 w-4" /> All stories</Link>
          </Button>
          <Reveal className="rounded-3xl overflow-hidden aspect-[16/9] shadow-elevated mb-10">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </Reveal>

          <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground mb-8">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold">{post.category}</span>
            <span className="flex items-center gap-1.5"><User className="h-4 w-4" /> {post.author ?? "Arsenal Fund Uganda"}</span>
            <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {post.date}</span>
            {post.readTime && <span>{post.readTime}</span>}
          </div>

          <Reveal className="space-y-5">
            {post.body?.map((p, i) => (
              <p key={i} className="text-lg text-foreground/85 leading-relaxed">{p}</p>
            ))}
          </Reveal>

          <div className="mt-12 p-8 rounded-3xl carbon hero-bg text-center">
            <h3 className="text-white text-2xl font-bold">Inspired by this story?</h3>
            <p className="text-carbon-muted mt-2">Help us write the next one — together.</p>
            <Button asChild className="mt-5 rounded-full bg-primary hover:bg-primary-glow text-primary-foreground h-12 px-7 shadow-glow">
              <Link to="/donate">Donate now <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="pb-24 bg-secondary/40 pt-16">
        <div className="container">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">Continue reading</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((s) => (
              <Link key={s.slug} to={`/blog/${s.slug}`} className="group bg-card rounded-3xl overflow-hidden border border-border shadow-card hover:shadow-elevated transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-primary">{s.category}</span>
                  <h4 className="font-bold leading-snug mt-2 group-hover:text-primary transition-colors">{s.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
