import { useState } from "react";
import { MapPin, Users } from "lucide-react";
import Reveal from "@/components/Reveal";

type Location = {
  id: string;
  name: string;
  region: string;
  // Percentage coordinates on the SVG viewBox (0-100), positioned over the Uganda silhouette
  x: number;
  y: number;
  beneficiaries: string;
  programs: string[];
};

// Approximate positions across Uganda districts (relative to the stylised map below)
const locations: Location[] = [
  { id: "kampala", name: "Kampala", region: "Central Region", x: 55, y: 70, beneficiaries: "4,200+", programs: ["Education", "Clean Water", "Sponsorship"] },
  { id: "wakiso", name: "Wakiso", region: "Central Region", x: 50, y: 68, beneficiaries: "1,600+", programs: ["Community Kitchens", "Youth Football"] },
  { id: "jinja", name: "Jinja", region: "Eastern Region", x: 66, y: 66, beneficiaries: "1,800+", programs: ["Women Empowerment", "Health Outreach"] },
  { id: "mbale", name: "Mbale", region: "Eastern Region", x: 78, y: 58, beneficiaries: "950+", programs: ["Scholarships", "Farming Co-ops"] },
  { id: "gulu", name: "Gulu", region: "Northern Region", x: 48, y: 28, beneficiaries: "1,400+", programs: ["Relief Aid", "Education"] },
  { id: "lira", name: "Lira", region: "Northern Region", x: 56, y: 38, beneficiaries: "720+", programs: ["Nutrition", "Sports Outreach"] },
  { id: "arua", name: "Arua", region: "West Nile", x: 28, y: 22, beneficiaries: "640+", programs: ["Emergency Relief", "Sponsorship"] },
  { id: "mbarara", name: "Mbarara", region: "Western Region", x: 32, y: 78, beneficiaries: "880+", programs: ["Healthcare", "Sponsorship"] },
  { id: "fortportal", name: "Fort Portal", region: "Western Region", x: 24, y: 58, beneficiaries: "510+", programs: ["Education", "Arts & Skills"] },
  { id: "masaka", name: "Masaka", region: "Central Region", x: 46, y: 82, beneficiaries: "690+", programs: ["Clean Water", "Football"] },
];

const ImpactMap = () => {
  const [active, setActive] = useState<Location | null>(null);

  return (
    <section className="bg-carbon py-16 sm:py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 hero-bg opacity-50 pointer-events-none" />
      <div className="container mx-auto relative">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-4">
              <MapPin className="h-3.5 w-3.5" /> Where We Serve · Uganda
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Our Impact <span className="text-gradient-arsenal">Across Uganda</span>
            </h2>
            <p className="text-carbon-muted text-sm sm:text-base">
              From Kampala to Gulu, tap a pin to see the communities we reach and the programs running on the ground.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="relative rounded-3xl bg-carbon-elevated/60 border border-white/5 p-3 sm:p-6 md:p-8 backdrop-blur-sm">
            <div className="relative w-full mx-auto max-w-2xl" style={{ aspectRatio: "1 / 1" }}>
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" aria-hidden="true">
                <defs>
                  <radialGradient id="ugandaGlow" cx="50%" cy="50%" r="60%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="ugandaFill" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.12" />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="48" fill="url(#ugandaGlow)" />
                {/* Stylised Uganda silhouette (approximate polygon) */}
                <path
                  d="M22,22 L36,14 L48,18 L60,14 L72,22 L80,32 L84,46 L82,60 L78,72 L68,84 L54,90 L40,88 L28,82 L20,70 L16,56 L18,40 Z"
                  fill="url(#ugandaFill)"
                  stroke="hsl(var(--primary) / 0.55)"
                  strokeWidth="0.6"
                  strokeLinejoin="round"
                />
                <text x="50" y="52" textAnchor="middle" fontSize="6" fontWeight="800" fill="hsl(0 0% 100% / 0.07)" letterSpacing="2">
                  UGANDA
                </text>
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
                  aria-label={`${loc.name}, ${loc.region}`}
                >
                  <span
                    className="absolute inset-0 m-auto h-3 w-3 rounded-full bg-primary/40 animate-ping"
                    style={{ animationDelay: `${i * 0.25}s` }}
                  />
                  <span className="relative block h-3 w-3 rounded-full bg-primary ring-2 ring-primary-foreground shadow-glow group-hover:scale-150 transition-transform" />

                  {active?.id === loc.id && (
                    <div
                      className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-52 sm:w-56 z-20 animate-fade-in"
                      role="tooltip"
                    >
                      <div className="bg-card text-card-foreground rounded-2xl shadow-elevated border border-border p-4 text-left">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div>
                            <div className="font-bold text-sm leading-tight">{loc.name}</div>
                            <div className="text-xs text-muted-foreground">{loc.region}, Uganda</div>
                          </div>
                          <MapPin className="h-4 w-4 text-primary shrink-0" />
                        </div>
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-primary mb-2">
                          <Users className="h-3.5 w-3.5" />
                          {loc.beneficiaries}
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {loc.programs.map((p) => (
                            <span key={p} className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-2 w-2 rotate-45 bg-card border-r border-b border-border" />
                    </div>
                  )}
                </button>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-carbon-muted">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-primary shadow-glow" />
                Active program location
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-3.5 w-3.5 text-primary" />
                {locations.length} Ugandan communities served
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ImpactMap;
