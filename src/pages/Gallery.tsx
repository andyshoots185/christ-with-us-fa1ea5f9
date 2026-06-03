import { useMemo, useState } from "react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { photos } from "@/data/images";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

type Item = { src: string; caption: string; category: "Education" | "Healthcare" | "Football" | "Community" };

const items: Item[] = [
  { src: photos.scholar, caption: "Term 1 scholarship cohort", category: "Education" },
  { src: photos.school, caption: "Back-to-school distribution, Wakiso", category: "Education" },
  { src: photos.education, caption: "Literacy club, Mukono", category: "Education" },
  { src: photos.edu, caption: "Tutoring after school", category: "Education" },
  { src: photos.health, caption: "Mobile medical camp", category: "Healthcare" },
  { src: photos.water, caption: "Borehole launch day", category: "Community" },
  { src: photos.nutrition, caption: "Community kitchen", category: "Community" },
  { src: photos.smile, caption: "Gunners Cup U-17 final", category: "Football" },
  { src: photos.together, caption: "Volunteers at outreach", category: "Community" },
  { src: photos.happy, caption: "Beneficiary family", category: "Community" },
  { src: photos.eeee, caption: "Member meetup, Ntinda", category: "Football" },
  { src: photos.rdue, caption: "Field medics in action", category: "Healthcare" },
  { src: photos.farming, caption: "Family-farming co-op", category: "Community" },
  { src: photos.arts, caption: "Youth arts workshop", category: "Education" },
  { src: photos.women, caption: "Women's empowerment", category: "Community" },
  { src: photos.relief, caption: "Emergency food packs", category: "Community" },
];

const filters = ["All", "Education", "Healthcare", "Football", "Community"] as const;

const Gallery = () => {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const list = useMemo(() => (filter === "All" ? items : items.filter((i) => i.category === filter)), [filter]);

  return (
    <Layout>
      <PageHero
        tag="Gallery"
        title="Moments that fuel the movement."
        subtitle="Real faces, real impact — captured across our programs, events and outreach across Uganda."
        image={photos.smile}
      />

      <section className="py-20 bg-background">
        <div className="container">
          <Reveal className="flex flex-wrap items-center gap-2 mb-10 justify-center">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all border ${
                  filter === f
                    ? "bg-primary text-primary-foreground border-primary shadow-glow"
                    : "bg-background border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </Reveal>

          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {list.map((it, i) => (
              <Dialog key={`${it.src}-${i}`}>
                <DialogTrigger asChild>
                  <button className="block w-full break-inside-avoid group relative rounded-2xl overflow-hidden">
                    <img
                      src={it.src}
                      alt={it.caption}
                      loading="lazy"
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <span className="text-white text-sm font-medium">{it.caption}</span>
                    </div>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl bg-carbon border-white/10 p-2">
                  <img src={it.src} alt={it.caption} className="w-full h-auto rounded-xl" />
                  <p className="text-carbon-muted text-sm text-center py-2">{it.caption}</p>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
