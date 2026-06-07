import { Link } from "react-router-dom";
import {
  Shield, Clock, Star, Wrench, Home, Search,
  CloudLightning, CheckCircle, ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-roofing.jpg";
import { siteConfig } from "@/config/site";

// Map icon strings from config to actual components
const iconMap: Record<string, React.ElementType> = {
  Wrench, Home, Search, CloudLightning, Shield, Clock, Star, CheckCircle,
};

const trustBadgeIcons: Record<string, React.ElementType> = {
  "Licensed & Insured": Shield,
  "Free Estimates": Clock,
  "Fast Turnaround": Wrench,
  "5-Star Rated": Star,
};

// ============================================
const HeroSection = () => {
  const { hero } = siteConfig;

  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt={`${siteConfig.companyName} hero`}
          width={1536}
          height={1024}
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 hero-overlay opacity-50" />
      </div>

      <div className="relative section-container py-32 lg:py-40">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-display-lg font-bold text-primary-foreground mb-6 animate-fade-in">
            {hero.headline}
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl animate-fade-in"
            style={{ animationDelay: "0.1s" }}>
            {hero.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in"
            style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" size="2xl" asChild>
              <Link to="/contact">
                {hero.primaryCTA}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="2xl" asChild>
              <a href={siteConfig.phoneHref}>
                {hero.secondaryCTA} {siteConfig.phone}
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in"
            style={{ animationDelay: "0.3s" }}>
            {hero.trustBadges.map((badge) => {
              const Icon = trustBadgeIcons[badge] ?? Shield;
              return (
                <div key={badge} className="flex items-center gap-2 text-primary-foreground/90">
                  <Icon className="h-5 w-5 text-gold" />
                  <span className="text-sm font-medium">{badge}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
const ServicesSection = () => {
  const { services, servicesSection } = siteConfig;

  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="section-container">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-display-sm font-bold mb-4">
            {servicesSection.heading}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {servicesSection.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? Wrench;
            return (
              <div key={service.title} className="bg-card rounded-xl p-6 card-hover">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link to="/services"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:gap-2 transition-all">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ============================================
const WhyChooseUsSection = () => {
  const { whyUs } = siteConfig;

  return (
    <section className="py-16 lg:py-24">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-display-sm font-bold mb-6">
              {whyUs.heading}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {whyUs.subheading}
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {whyUs.reasons.map((reason) => (
                <div key={reason.title} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm">{reason.title}</h4>
                    <p className="text-xs text-muted-foreground">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl p-8 lg:p-12 text-primary-foreground bg-primary">
              <h3 className="text-2xl font-bold mb-4 text-secondary">
                {whyUs.ctaBox.heading}
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                {whyUs.ctaBox.subheading}
              </p>
              <Button variant="cta" size="xl" asChild className="w-full sm:w-auto">
                <Link to="/contact">
                  {whyUs.ctaBox.cta}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <p className="text-xs text-primary-foreground/60 mt-4">
                {whyUs.ctaBox.disclaimer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
const TestimonialsSection = () => {
  const { testimonials } = siteConfig;

  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-display-sm font-bold mb-4">
            {testimonials.heading}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {testimonials.subheading}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.items.map((testimonial) => (
            <div key={testimonial.name} className="bg-card rounded-xl p-6 card-hover">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold">{testimonial.name}</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">{testimonial.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
const CTASection = () => {
  const { ctaSection } = siteConfig;

  return (
    <section className="py-16 lg:py-24 bg-primary">
      <div className="section-container text-center">
        <h2 className="text-3xl md:text-4xl lg:text-display-sm font-bold text-primary-foreground mb-4">
          {ctaSection.heading}
        </h2>
        <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
          {ctaSection.subheading}
        </p>
        <Button variant="cta" size="2xl" asChild>
          <Link to="/contact">
            {ctaSection.cta}
            <ArrowRight className="h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

// ============================================
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
};

export default HomePage;