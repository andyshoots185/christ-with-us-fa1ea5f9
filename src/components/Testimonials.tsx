import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Quote, Star } from "lucide-react";
import Reveal from "@/components/Reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { testimonials } from "@/data/content";

const Testimonials = () => {
  const autoplay = useRef(
    Autoplay({ delay: 3200, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <section className="py-24 bg-background">
      <div className="container">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-primary text-xs font-bold tracking-widest uppercase">
            ● Voices of Impact
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 leading-tight">
            Real People. Real Change.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Stories from the families, volunteers and partners walking this mission with us.
          </p>
        </Reveal>

        <Carousel
          setApi={setApi}
          opts={{ align: "start", loop: true }}
          plugins={[autoplay.current]}
          onMouseEnter={() => { try { autoplay.current?.stop?.(); } catch {} }}
          onMouseLeave={() => { try { autoplay.current?.play?.(); } catch {} }}
          className="w-full"
        >
          <CarouselContent className="-ml-5">
            {testimonials.map((t) => (
              <CarouselItem
                key={t.name}
                className="pl-5 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <article className="relative h-full bg-card rounded-3xl p-7 border border-border shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/15" />

                  <div className="flex items-center gap-1" aria-label={`Rated ${t.rating} out of 5`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < t.rating
                            ? "fill-primary text-primary"
                            : "text-muted-foreground/30"
                        }`}
                      />
                    ))}
                  </div>

                  <p className="mt-5 text-foreground/90 leading-relaxed flex-1">
                    "{t.quote}"
                  </p>

                  <div className="mt-7 pt-5 border-t border-border">
                    <div className="font-bold">{t.name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{t.role}</div>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-8 flex items-center justify-between gap-4">
            <div className="flex gap-1.5">
              {Array.from({ length: count }).map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => api?.scrollTo(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === current ? "w-6 bg-primary" : "w-1.5 bg-border"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <CarouselPrevious className="static translate-y-0 h-11 w-11 bg-card border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary" />
              <CarouselNext className="static translate-y-0 h-11 w-11 bg-card border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary" />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
