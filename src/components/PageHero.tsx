import { cn } from "@/lib/utils";

interface PageHeroProps {
  tag: string;
  title: string;
  subtitle: string;
  className?: string;
  /** Background image URL for the hero */
  image?: string;
}

const PageHero = ({ tag, title, subtitle, className, image }: PageHeroProps) => (
  <section className={cn("relative carbon hero-bg pt-36 pb-20 overflow-hidden", className)}>
    {image && (
      <>
        <div
          className="absolute inset-0 opacity-30 mix-blend-luminosity"
          style={{
            backgroundImage: `url('${image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-fade-bottom)" }}
          aria-hidden="true"
        />
      </>
    )}
    <div className="container relative z-10">
      <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/15 text-primary text-xs font-semibold mb-6 ring-1 ring-primary/30">
        {tag}
      </span>
      <h1 className="text-4xl md:text-6xl font-bold text-white max-w-3xl leading-[1.05] animate-fade-up">
        {title}
      </h1>
      <p className="mt-5 text-carbon-muted max-w-xl text-lg animate-fade-up">{subtitle}</p>
    </div>
  </section>
);

export default PageHero;
