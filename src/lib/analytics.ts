import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = "G-M6VK4M4V3L";

export const initGA = () => {
  ReactGA.initialize(GA_MEASUREMENT_ID);
};

export const trackPageView = (page: string) => {
  ReactGA.send({
    hitType: "pageview",
    page,
  });
};

export const trackEvent = (
  action: string,
  category: string,
  label?: string
) => {
  ReactGA.event({
    action,
    category,
    label,
  });
};