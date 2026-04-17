import { useEffect, useState } from "react";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const KEY = "cwu_cookie_consent_v1";

const CookieConsent = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      if (!localStorage.getItem(KEY)) setShow(true);
    }, 1200);
    return () => clearTimeout(t);
  }, []);

  const decide = (value: "accepted" | "declined") => {
    localStorage.setItem(KEY, value);
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-50 animate-fade-up">
      <div className="bg-card border border-border shadow-elevated rounded-2xl p-5 flex gap-4 items-start">
        <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
          <Cookie className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-sm">We respect your privacy</h4>
          <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
            We use cookies to improve your experience and measure our impact reporting. You can change your choice anytime.
          </p>
          <div className="mt-3 flex gap-2">
            <Button size="sm" onClick={() => decide("accepted")} className="rounded-full bg-primary hover:bg-primary-glow text-primary-foreground h-9 px-4 text-xs">
              Accept
            </Button>
            <Button size="sm" variant="outline" onClick={() => decide("declined")} className="rounded-full h-9 px-4 text-xs">
              Decline
            </Button>
          </div>
        </div>
        <button onClick={() => decide("declined")} aria-label="Dismiss" className="text-muted-foreground hover:text-foreground">
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
