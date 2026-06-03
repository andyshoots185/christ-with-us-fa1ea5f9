import { Link } from "react-router-dom";
import { ArrowRight, Heart } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const emailSchema = z.string().trim().email("Enter a valid email").max(255);

const cols = [
  {
    title: "Navigation",
    links: [
      { label: "Home", to: "/" },
      { label: "About", to: "/about" },
      { label: "Causes", to: "/causes" },
      { label: "Donate", to: "/donate" },
    ],
  },
  {
    title: "Other Links",
    links: [
      { label: "Programs", to: "/programs" },
      { label: "Blogs", to: "/blog" },
      { label: "FAQ", to: "/faq" },
      { label: "Privacy policy", to: "#" },
      { label: "Terms and Conditions", to: "#" },
    ],
  },
  {
    title: "Social Connect",
    links: [
      { label: "LinkedIn", to: "#" },
      { label: "Instagram", to: "#" },
      { label: "X / Twitter", to: "#" },
      { label: "Facebook", to: "#" },
    ],
  },
];

const words = ["Hope", "Unity", "Care", "Impact", "Growth", "Trust", "Together"];

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      toast({ title: "Invalid email", description: result.error.errors[0].message, variant: "destructive" });
      return;
    }
    const list = JSON.parse(localStorage.getItem("cwu_newsletter") || "[]");
    if (!list.includes(result.data)) list.push(result.data);
    localStorage.setItem("cwu_newsletter", JSON.stringify(list));
    toast({ title: "You're in 💚", description: "Welcome to the family — look out for our next update." });
    setEmail("");
  };

  return (
    <footer className="carbon relative overflow-hidden">
      <div className="container py-20">
        <div className="grid lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr] gap-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Heart className="h-6 w-6 text-primary fill-primary" />
              <span className="font-bold text-2xl text-gradient-arsenal">Arsenal Fund Uganda</span>
            </Link>
            <p className="text-carbon-muted max-w-xs leading-relaxed">
              Be the first to hear how you're making a difference in Kampala and beyond.
            </p>
            <div className="mt-8">
              <h4 className="text-white font-semibold mb-2">Newsletter</h4>
              <p className="text-carbon-muted text-sm mb-3">Sign up to never miss an update.</p>
              <form className="relative max-w-sm" onSubmit={handleSubscribe}>
                <Input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@email.com"
                  className="rounded-full bg-carbon-elevated border-white/10 text-white placeholder:text-carbon-muted h-12 pl-5 pr-14"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="absolute right-1 top-1 h-10 w-10 rounded-full bg-primary hover:bg-primary-glow"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-white font-semibold mb-5">{c.title}</h4>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-carbon-muted hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      {l.label}
                      <ArrowRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-white font-semibold mb-5">Contact us</h4>
            <ul className="space-y-3 text-carbon-muted text-sm">
              <li>+256 772 000 000</li>
              <li>hello@arsenalfunduganda.org</li>
              <li>Plot 14, Ntinda Road,<br/>Kampala, Uganda</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-sm text-carbon-muted">
          <p>© {new Date().getFullYear()} Arsenal Fund Uganda — Kampala, Uganda. All rights reserved.</p>
          <p>Built with hope, for the community.</p>
        </div>
      </div>

      {/* Subtle giant pattern text */}
      <div className="select-none pointer-events-none overflow-hidden">
        <div className="flex gap-8 px-4 pb-6 opacity-[0.06] whitespace-nowrap">
          {[...words, ...words, ...words].map((w, i) => (
            <span key={i} className="text-white text-5xl md:text-7xl font-black tracking-tight flex items-center gap-8">
              {w}
              <span className="text-primary">✦</span>
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
