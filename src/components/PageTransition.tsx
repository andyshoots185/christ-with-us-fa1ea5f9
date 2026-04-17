import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

/** Wraps page content with a smooth fade/slide transition on route change. */
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const [display, setDisplay] = useState(children);
  const [stage, setStage] = useState<"in" | "out">("in");

  useEffect(() => {
    setStage("out");
    const t = setTimeout(() => {
      setDisplay(children);
      setStage("in");
    }, 180);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // keep display in sync if children reference changes without route change
  useEffect(() => {
    if (stage === "in") setDisplay(children);
  }, [children, stage]);

  return (
    <div
      className={`transition-all duration-300 ease-out ${
        stage === "in" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      }`}
    >
      {display}
    </div>
  );
};

export default PageTransition;
