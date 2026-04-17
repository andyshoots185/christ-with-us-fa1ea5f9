import { Link, NavLink as RouterNavLink } from "react-router-dom";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { to: "/about", label: "About" },
  { to: "/causes", label: "Causes" },
  { to: "/programs", label: "Programs" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl">
      <nav className="glass-nav rounded-full px-3 py-2 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 pl-3 pr-4 py-1.5 rounded-full">
          <Heart className="h-5 w-5 text-primary fill-primary" strokeWidth={2.5} />
          <span className="font-bold text-white tracking-tight text-lg">Christ With Us</span>
        </Link>

        <ul className="hidden md:flex items-center gap-1 text-sm">
          {links.map((l) => (
            <li key={l.to}>
              <RouterNavLink
                to={l.to}
                className={({ isActive }) =>
                  cn(
                    "px-4 py-2 rounded-full text-white/75 hover:text-white transition-colors",
                    isActive && "text-white bg-white/5"
                  )
                }
              >
                {l.label}
              </RouterNavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="rounded-full bg-primary hover:bg-primary-glow text-primary-foreground font-semibold px-5 shadow-glow">
            <Link to="/donate">Donate Now</Link>
          </Button>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden mt-2 glass-nav rounded-3xl p-3">
          {links.map((l) => (
            <RouterNavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-white/80 hover:text-white"
            >
              {l.label}
            </RouterNavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
