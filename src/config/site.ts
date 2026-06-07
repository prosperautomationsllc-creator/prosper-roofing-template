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

// ============================================
  // ABOUT PAGE COPY
  // ============================================
  about: {
    hero: {
      headline: "Built on Trust. Focused on Quality.",
      subheadline: "We're more than a roofing company—we're your neighbors, dedicated to protecting the homes and businesses in our community.",
    },
    story: {
      heading: "Our Story",
      paragraphs: [
        "Founded over a decade ago with a simple mission: provide honest, quality roofing services that homeowners can trust. What started as a small family operation has grown into one of the region's most respected roofing companies.",
        "Add your company's story here.",
        "We've built our reputation one roof at a time, earning the trust of thousands of homeowners through quality work, fair pricing, and genuine care for our customers. When you choose us, you're not just getting a contractor—you're getting a partner committed to protecting your home.",
      ],
    },
    values: [
      {
        icon: "Heart",
        title: "Customer-First Mindset",
        description: "Every decision we make starts with what's best for our customers. We treat your home like it's our own.",
      },
      {
        icon: "Award",
        title: "Quality Craftsmanship",
        description: "We never cut corners. Every project is completed to the highest standards using premium materials.",
      },
      {
        icon: "Users",
        title: "Community Focus",
        description: "As a local, family-owned business, we're invested in our community's homes and neighborhoods.",
      },
      {
        icon: "Shield",
        title: "Integrity & Honesty",
        description: "Transparent pricing, honest recommendations, and no high-pressure sales tactics. Ever.",
      },
    ],
    valuesSection: {
      heading: "Our Values",
      subheading: "These principles guide every project we take on and every interaction with our customers.",
    },
    trustSection: {
      heading: "Why Trust Us",
      items: [
        {
          icon: "Shield",
          title: "Licensed & Insured",
          description: "Fully licensed and insured for your protection. We carry comprehensive liability and workers' compensation coverage.",
        },
        {
          icon: "Award",
          title: "Warranty-Backed Work",
          description: "Our workmanship warranty gives you peace of mind. We stand behind every project with comprehensive coverage.",
        },
        {
          icon: "Users",
          title: "Serving Local Communities",
          description: "We're proud to serve homeowners throughout the region. Our team knows local building codes and weather challenges.",
        },
      ],
    },
    cta: {
      heading: "Schedule a Free Roofing Inspection",
      subheading: "Let our experts assess your roof's condition and provide honest recommendations—no obligation, no pressure.",
      cta: "Schedule Your Inspection",
    },
  },

  // ============================================
  // SERVICES PAGE COPY
  // ============================================
  servicesPage: {
    hero: {
      headline: "Professional Roofing Services You Can Count On",
      subheadline: "From routine repairs to complete replacements, we deliver quality workmanship backed by years of experience and industry-leading warranties.",
    },
    cta: {
      heading: "Ready to Get Started?",
      subheading: "Contact us today for a free, no-obligation estimate on any of our roofing services.",
      cta: "Request Your Free Estimate",
    },
    items: [
      {
        id: "residential",
        icon: "Home",
        title: "Residential Roofing",
        description: "Your home deserves the best protection. We specialize in all types of residential roofing systems, from traditional asphalt shingles to premium metal roofing.",
        features: [
          "Complete roof installations for new construction",
          "Re-roofing and overlay services",
          "Premium shingle, tile, and metal options",
          "Energy-efficient roofing solutions",
          "Full manufacturer warranties",
        ],
      },
      {
        id: "commercial",
        icon: "Building2",
        title: "Commercial Roofing",
        description: "Protect your business investment with a commercial roofing system built to last. We work with businesses of all sizes to provide durable, cost-effective solutions.",
        features: [
          "Flat roof systems (TPO, EPDM, PVC)",
          "Metal roofing for commercial buildings",
          "Regular maintenance programs",
          "Minimal disruption to your operations",
          "Commercial warranty options",
        ],
      },
      {
        id: "repair",
        icon: "Wrench",
        title: "Roof Repairs",
        description: "From minor leaks to significant damage, our skilled team diagnoses and fixes roof problems quickly and effectively. We repair it right the first time.",
        features: [
          "Leak detection and repair",
          "Shingle and tile replacement",
          "Flashing and vent repairs",
          "Gutter and downspout repairs",
          "Emergency repair services",
        ],
      },
      {
        id: "replacement",
        icon: "RefreshCw",
        title: "Full Roof Replacements",
        description: "When repairs aren't enough, trust us for a complete roof replacement. We guide you through every step, from material selection to final inspection.",
        features: [
          "Complete tear-off and disposal",
          "Premium underlayment installation",
          "Wide selection of roofing materials",
          "Proper ventilation assessment",
          "Full workmanship warranty",
        ],
      },
      {
        id: "storm-damage",
        icon: "CloudLightning",
        title: "Storm Damage & Insurance Assistance",
        description: "Storms happen—we're here to help. Our team works directly with insurance companies to streamline the claims process and restore your roof quickly.",
        features: [
          "24/7 emergency response",
          "Free storm damage inspections",
          "Insurance claim documentation",
          "Direct communication with adjusters",
          "Temporary protective measures",
        ],
      },
      {
        id: "inspections",
        icon: "Shield",
        title: "Preventative Maintenance & Inspections",
        description: "Regular inspections catch small issues before they become costly repairs. Our maintenance programs extend the life of your roof and protect your investment.",
        features: [
          "Comprehensive roof inspections",
          "Detailed written reports",
          "Photo documentation",
          "Maintenance recommendations",
          "Annual maintenance programs",
        ],
      },
    ],
  },

  // ============================================
  // CONTACT PAGE COPY
  // ============================================
  contactPage: {
    hero: {
      headline: "Request a Free Estimate",
      subheadline: "Fill out the form below and we'll get back to you within 24 hours to schedule your free, no-obligation estimate.",
    },
    serviceTypes: [
      "Roof Repair",
      "Roof Replacement",
      "Roof Inspection",
      "Storm Damage Assessment",
      "Commercial Roofing",
      "Preventative Maintenance",
      "Other",
    ],
    form: {
      submitButton: "Get My Free Estimate",
      disclaimer: "No pressure. No obligation. Just honest roofing advice.",
    },
    whatHappensNext: [
      "We'll contact you within 24 hours to confirm your request",
      "We'll schedule a convenient time for your free inspection",
      "You'll receive a detailed, no-obligation estimate",
      "No pressure—just honest advice about your roofing needs",
    ],
  },


};
