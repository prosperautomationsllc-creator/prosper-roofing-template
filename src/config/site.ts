export const siteConfig = {
  // ============================================
  // BUSINESS INFO
  // ============================================
  companyName: "Your Roofing Company",
  shortName: "Your Company",
  industryLabel: "Premium Roofing Services",
  phone: "(000) 000-0000",
  phoneHref: "tel:+10000000000",
  email: "owner@example.com",
  domain: "yourdomain.com",
  city: "Your City",
  state: "ST",
  address: "123 Main Street",
  emergencyService: true,

  socials: {
    facebook: "",
    instagram: "",
    linkedin: "",
  },

  serviceAreas: [
    "City One",
    "City Two",
    "City Three",
  ],

  stats: {
    yearsInBusiness: "10+",
    projectsCompleted: "1,000+",
    rating: "5.0",
    satisfactionGuarantee: "100%",
  },

  // ============================================
  // ASSETS
  // ============================================
  logo: "/logo.png",
  favicon: "/favicon.ico",
  heroImage: "/images/hero.jpg",
  aboutImage: "/images/about.jpg",
  serviceImages: {
    repair: "/images/service-repair.jpg",
    replacement: "/images/service-replacement.jpg",
    storm: "/images/service-storm.jpg",
  },

  // ============================================
  // BRAND COLORS (HSL values only, no "hsl()")
  // ============================================
  // To find HSL values: https://hslpicker.com
  theme: {
    primary: "213 56% 24%",         // Main brand color (navy, blue, green, etc.)
    primaryForeground: "0 0% 100%", // Text on primary color (usually white)
    accent: "0 84% 45%",            // CTA / highlight color (red, orange, etc.)
    accentForeground: "0 0% 100%",  // Text on accent color (usually white)
    gold: "45 93% 47%",             // Star / badge color
    navy: "213 56% 24%",            // Dark section backgrounds
    navyDark: "213 60% 18%",        // Darker variant
    navyLight: "213 45% 35%",       // Lighter variant
  },

  // ============================================
  // SEO
  // ============================================
  seo: {
    title: "",
    description: "",
    keywords: "",
  },

  // ============================================
  // BUSINESS HOURS
  // ============================================
  businessHours: {
    weekdays: "Mon-Fri: 7am - 6pm",
    saturday: "Sat: 8am - 4pm",
    sunday: "Sun: Closed",
  },

  // ============================================
  // HOMEPAGE COPY
  // ============================================
  hero: {
    headline: "Reliable Roofing You Can Trust",
    subheadline: "Residential & Commercial Roofing Services Backed by Quality Craftsmanship. Protecting homes and businesses for over a decade.",
    primaryCTA: "Get a Free Roofing Estimate",
    secondaryCTA: "Call Us Now",
    trustBadges: [
      "Licensed & Insured",
      "Free Estimates",
      "Fast Turnaround",
      "5-Star Rated",
    ],
  },

  services: [
    {
      title: "Roof Repair",
      description: "Fast, reliable repairs for leaks, damaged shingles, and storm damage. We fix it right the first time.",
      icon: "Wrench",
    },
    {
      title: "Roof Replacement",
      description: "Complete roof replacement with premium materials and expert installation backed by warranty.",
      icon: "Home",
    },
    {
      title: "Roof Inspections",
      description: "Comprehensive inspections to identify issues before they become costly problems.",
      icon: "Search",
    },
    {
      title: "Storm Damage",
      description: "Emergency storm damage repair and full insurance claim assistance to get your roof restored.",
      icon: "CloudLightning",
    },
  ],

  servicesSection: {
    heading: "Our Roofing Services",
    subheading: "From minor repairs to complete replacements, we provide comprehensive roofing solutions for every need.",
  },

  whyUs: {
    heading: "Why Homeowners Choose Us",
    subheading: "We're not just roofers—we're your neighbors. Our commitment to quality, honesty, and customer satisfaction has made us the area's most trusted roofing company.",
    reasons: [
      { title: "10+ Years Experience", description: "A decade of trusted roofing expertise in the community" },
      { title: "High-Quality Materials", description: "We use only premium, manufacturer-certified materials" },
      { title: "Transparent Pricing", description: "Honest, upfront quotes with no hidden fees or surprises" },
      { title: "Local & Family-Owned", description: "We live here too—your neighbors and community members" },
      { title: "Workmanship Warranty", description: "Our work is backed by comprehensive warranty coverage" },
      { title: "Fast Response Time", description: "Quick turnaround on quotes and emergency repairs" },
    ],
    ctaBox: {
      heading: "Ready to Get Started?",
      subheading: "Schedule your free roofing inspection today and get an honest assessment of your roof's condition.",
      cta: "Request Free Estimate",
      disclaimer: "No obligation • No pressure • Just honest advice",
    },
  },

  testimonials: {
    heading: "What Our Customers Say",
    subheading: "Don't just take our word for it—hear from homeowners who trust us with their roofing needs.",
    items: [
      {
        name: "Michael Thompson",
        location: "Your City",
        rating: 5,
        text: "They replaced our entire roof after storm damage. The crew was professional, punctual, and the quality of work was outstanding. They handled everything with our insurance company too.",
      },
      {
        name: "Sarah Mitchell",
        location: "Your City",
        rating: 5,
        text: "We had a persistent leak that two other companies couldn't fix. They found the issue on their first inspection and repaired it the same week. Highly recommend!",
      },
      {
        name: "David Chen",
        location: "Your City",
        rating: 5,
        text: "From the initial estimate to final cleanup, everything was handled professionally. Fair pricing, no surprises, and our new roof looks incredible.",
      },
      {
        name: "Jennifer Martinez",
        location: "Your City",
        rating: 5,
        text: "Best roofing experience we've ever had. The team was respectful of our property and finished ahead of schedule. The workmanship warranty gives us peace of mind.",
      },
    ],
  },

  ctaSection: {
    heading: "Get Peace of Mind With a Roof You Can Rely On",
    subheading: "Ready to protect your home with quality roofing? Contact us today for a free, no-obligation estimate.",
    cta: "Request Your Free Estimate",
  },
};