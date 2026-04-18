import { useState } from "react";
import { MapPin, Users } from "lucide-react";
import Reveal from "@/components/Reveal";

type Location = {
  id: string;
  name: string;
  country: string;
  // Percentage coordinates on the SVG viewBox (0-100)
  x: number;
  y: number;
  beneficiaries: string;
  programs: string[];
};

const locations: Location[] = [
  {
    id: "kampala",
    name: "Kampala",
    country: "Uganda",
    x: 56.5,
    y: 58,
    beneficiaries: "4,200+",
    programs: ["Education", "Clean Water", "Sponsorship"],
  },
  {
    id: "jinja",
    name: "Jinja",
    country: "Uganda",
    x: 57.2,
    y: 57.5,
    beneficiaries: "1,800+",
    programs: ["Community Kitchens", "Women Empowerment"],
  },
  {
    id: "nairobi",
    name: "Nairobi",
    country: "Kenya",
    x: 58.5,
    y: 60,
    beneficiaries: "2,300+",
    programs: ["Health Outreach", "Scholarships"],
  },
  {
    id: "kigali",
    name: "Kigali",
    country: "Rwanda",
    x: 55.5,
    y: 60,
    beneficiaries: "950+",
    programs: ["Farming Co-ops", "Arts & Skills"],
  },
  {
    id: "lagos",
    name: "Lagos",
    country: "Nigeria",
    x: 47,
    y: 57,
    beneficiaries: "1,500+",
    programs: ["Relief Aid", "Education"],
  },
  {
    id: "accra",
    name: "Accra",
    country: "Ghana",
    x: 45,
    y: 56,
    beneficiaries: "800+",
    programs: ["Sponsorship", "Health"],
  },
  {
    id: "london",
    name: "London",
    country: "UK",
    x: 46.5,
    y: 30,
    beneficiaries: "Donor Hub",
    programs: ["Fundraising", "Volunteers"],
  },
  {
    id: "newyork",
    name: "New York",
    country: "USA",
    x: 26,
    y: 36,
    beneficiaries: "Donor Hub",
    programs: ["Fundraising", "Awareness"],
  },
  {
    id: "toronto",
    name: "Toronto",
    country: "Canada",
    x: 24,
    y: 32,
    beneficiaries: "Partner Network",
    programs: ["Sponsorship", "Volunteers"],
  },
  {
    id: "sydney",
    name: "Sydney",
    country: "Australia",
    x: 87,
    y: 78,
    beneficiaries: "Partner Network",
    programs: ["Awareness", "Fundraising"],
  },
];

const ImpactMap = () => {
  const [active, setActive] = useState<Location | null>(null);

  return (
    <section className="bg-carbon py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 hero-bg opacity-50 pointer-events-none" />
      <div className="container mx-auto relative">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-4">
              <MapPin className="h-3.5 w-3.5" /> Where We Serve
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Global <span className="text-gradient-green">Impact Map</span>
            </h2>
            <p className="text-carbon-muted">
              Hover or tap a pin to see the communities we reach and the programs running on the ground.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="relative rounded-3xl bg-carbon-elevated/60 border border-white/5 p-4 md:p-8 backdrop-blur-sm">
            <div className="relative w-full" style={{ aspectRatio: "2 / 1" }}>
              {/* Stylized world map (simplified continent silhouettes) */}
              <svg
                viewBox="0 0 1000 500"
                className="absolute inset-0 w-full h-full"
                aria-hidden="true"
              >
                <defs>
                  <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Dotted grid background to suggest a globe */}
                <g fill="hsl(0 0% 100% / 0.06)">
                  {Array.from({ length: 25 }).map((_, row) =>
                    Array.from({ length: 50 }).map((_, col) => {
                      const cx = col * 20 + 10;
                      const cy = row * 20 + 10;
                      // Rough continent mask (ellipses approximating land)
                      const inLand =
                        // Africa
                        (Math.pow((cx - 540) / 90, 2) + Math.pow((cy - 290) / 110, 2) < 1) ||
                        // Europe
                        (Math.pow((cx - 510) / 90, 2) + Math.pow((cy - 150) / 50, 2) < 1) ||
                        // Asia
                        (Math.pow((cx - 720) / 180, 2) + Math.pow((cy - 180) / 80, 2) < 1) ||
                        // N. America
                        (Math.pow((cx - 230) / 140, 2) + Math.pow((cy - 170) / 90, 2) < 1) ||
                        // S. America
                        (Math.pow((cx - 320) / 70, 2) + Math.pow((cy - 360) / 90, 2) < 1) ||
                        // Australia
                        (Math.pow((cx - 850) / 70, 2) + Math.pow((cy - 380) / 40, 2) < 1);
                      return inLand ? (
                        <circle key={`${row}-${col}`} cx={cx} cy={cy} r="2.2" />
                      ) : null;
                    })
                  )}
                </g>
              </svg>

              {/* Pins */}
              {locations.map((loc, i) => (
                <button
                  key={loc.id}
                  onMouseEnter={() => setActive(loc)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(loc)}
                  onBlur={() => setActive(null)}
                  onClick={() => setActive(active?.id === loc.id ? null : loc)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none"
                  style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                  aria-label={`${loc.name}, ${loc.country}`}
                >
                  {/* Pulsing rings */}
                  <span
                    className="absolute inset-0 m-auto h-3 w-3 rounded-full bg-primary/40 animate-ping"
                    style={{ animationDelay: `${i * 0.25}s` }}
                  />
                  <span className="relative block h-3 w-3 rounded-full bg-primary ring-2 ring-primary-foreground shadow-glow group-hover:scale-150 transition-transform" />

                  {/* Popup */}
                  {active?.id === loc.id && (
                    <div
                      className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-56 z-20 animate-fade-in"
                      role="tooltip"
                    >
                      <div className="bg-card text-card-foreground rounded-2xl shadow-elevated border border-border p-4 text-left">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div>
                            <div className="font-bold text-sm leading-tight">
                              {loc.name}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {loc.country}
                            </div>
                          </div>
                          <MapPin className="h-4 w-4 text-primary shrink-0" />
                        </div>
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-primary mb-2">
                          <Users className="h-3.5 w-3.5" />
                          {loc.beneficiaries}
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {loc.programs.map((p) => (
                            <span
                              key={p}
                              className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground"
                            >
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>
                      {/* Arrow */}
                      <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-2 w-2 rotate-45 bg-card border-r border-b border-border" />
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Legend */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-carbon-muted">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-primary shadow-glow" />
                Active program location
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-3.5 w-3.5 text-primary" />
                {locations.length} communities served worldwide
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ImpactMap;
