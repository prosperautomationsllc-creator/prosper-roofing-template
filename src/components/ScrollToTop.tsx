import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      const scrollToTarget = () =>
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

      if (scrollToTarget()) {
        return;
      }

      const timeout = window.setTimeout(scrollToTarget, 0);
      return () => window.clearTimeout(timeout);
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [pathname, hash]);

  return null;
}