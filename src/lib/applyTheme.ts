import { siteConfig } from "@/config/site";

export function applyTheme() {
  const root = document.documentElement;
  const { theme } = siteConfig;

  root.style.setProperty("--primary", theme.primary);
  root.style.setProperty("--primary-foreground", theme.primaryForeground);
  root.style.setProperty("--accent", theme.accent);
  root.style.setProperty("--accent-foreground", theme.accentForeground);
  root.style.setProperty("--gold", theme.gold);
  root.style.setProperty("--navy", theme.navy);
  root.style.setProperty("--navy", theme.primary);
  root.style.setProperty("--navy-dark", theme.navyDark);
  root.style.setProperty("--navy-light", theme.navyLight);
  root.style.setProperty("--ring", theme.primary);
}