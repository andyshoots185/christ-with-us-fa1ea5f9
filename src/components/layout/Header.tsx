import { Link, NavLink as RouterNavLink } from "react-router-dom";
import { Heart, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAutoHideOnScroll } from "@/hooks/use-scroll-direction";

const links = [
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/membership", label: "Membership" },
  { to: "/events", label: "Events" },
  { to: "/volunteer", label: "Volunteer" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const visible = useAutoHideOnScroll();
  // Always show when mobile menu open
  const show = visible || open;

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] max-w-6xl transition-all duration-300 ease-out will-change-transform",
        show ? "translate-y-0 opacity-100" : "-translate-y-[150%] opacity-0"
      )}
      style={{ transform: show ? "translate(-50%, 0)" : "translate(-50%, -150%)" }}
    >
      <nav className="glass-nav rounded-full px-3 py-2 flex items-center justify-between gap-2">
        <Link to="/" className="flex items-center gap-2 pl-2 sm:pl-3 pr-2 sm:pr-4 py-1.5 rounded-full">
          <Heart className="h-5 w-5 text-primary fill-primary" strokeWidth={2.5} />
          <span className="font-bold text-white tracking-tight text-base sm:text-lg whitespace-nowrap">
            Arsenal Fund Uganda
          </span>
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

        <div className="flex items-center gap-1.5 sm:gap-2">
          <Button
            asChild
            size="sm"
            className="hidden sm:inline-flex rounded-full bg-primary hover:bg-primary-glow text-primary-foreground font-semibold px-5 shadow-glow"
          >
            <a href={donateWhatsAppUrl} target="_blank" rel="noopener noreferrer">Donate Now</a>
          </Button>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-2 rounded-full hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden mt-2 glass-nav rounded-3xl p-3 animate-fade-in">
          {links.map((l) => (
            <RouterNavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                cn(
                  "block px-4 py-3 rounded-2xl text-white/80 hover:text-white hover:bg-white/5 transition-colors",
                  isActive && "text-white bg-white/5"
                )
              }
            >
              {l.label}
            </RouterNavLink>
          ))}
          <Button
            asChild
            className="mt-2 w-full rounded-full bg-primary hover:bg-primary-glow text-primary-foreground font-semibold shadow-glow"
            onClick={() => setOpen(false)}
          >
            <a href={donateWhatsAppUrl} target="_blank" rel="noopener noreferrer">Donate Now</a>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
