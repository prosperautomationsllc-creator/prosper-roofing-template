import { Link } from "react-router-dom";
import { Shield, Clock, Star, Wrench, Home, Search, CloudLightning, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-roofing.webp";
const HeroSection = () => {
  const trustBadges = [{
    icon: Shield,
    text: "Licensed & Insured"
  }, {
    icon: Clock,
    text: "Free Estimates"
  }, {
    icon: Wrench,
    text: "Fast Turnaround"
  }, {
    icon: Star,
    text: "5-Star Rated"
  }];
  return <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Professional roofing team working on a residential home" width={1600} height={1013} fetchPriority="high" decoding="async" className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay opacity-50" />
      </div>

      {/* Content */}
      <div className="relative section-container py-32 lg:py-40">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-display-lg font-bold text-primary-foreground mb-6 animate-fade-in">
            Reliable Roofing You Can Trust
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl animate-fade-in" style={{
          animationDelay: "0.1s"
        }}>
            Residential & Commercial Roofing Services Backed by Quality Craftsmanship. Protecting homes and businesses for over a decade.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{
          animationDelay: "0.2s"
        }}>
            <Button variant="hero" size="2xl" asChild>
              <Link to="/contact">
                Get a Free Roofing Estimate
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="2xl" asChild>
              <a href="tel:+15551234567">Call (555) 123-4567</a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in" style={{
          animationDelay: "0.3s"
        }}>
            {trustBadges.map(badge => <div key={badge.text} className="flex items-center gap-2 text-primary-foreground/90">
                <badge.icon className="h-5 w-5 text-gold" />
                <span className="text-sm font-medium">{badge.text}</span>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
const ServicesSection = () => {
  const services = [{
    icon: Wrench,
    title: "Roof Repair",
    description: "Fast, reliable repairs for leaks, damaged shingles, and storm damage. We fix it right the first time."
  }, {
    icon: Home,
    title: "Roof Replacement",
    description: "Complete roof replacement with premium materials and expert installation backed by warranty."
  }, {
    icon: Search,
    title: "Roof Inspections",
    description: "Comprehensive inspections to identify issues before they become costly problems."
  }, {
    icon: CloudLightning,
    title: "Storm Damage",
    description: "Emergency storm damage repair and full insurance claim assistance to get your roof restored."
  }];
  return <section className="py-16 lg:py-24 bg-secondary">
      <div className="section-container">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-display-sm font-bold mb-4">
            Our Roofing Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From minor repairs to complete replacements, we provide comprehensive roofing solutions for every need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(service => <div key={service.title} className="bg-card rounded-xl p-6 card-hover">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <Link to="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:gap-2 transition-all">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>)}
        </div>
      </div>
    </section>;
};
const WhyChooseUsSection = () => {
  const reasons = [{
    title: "10+ Years Experience",
    description: "A decade of trusted roofing expertise in the community"
  }, {
    title: "High-Quality Materials",
    description: "We use only premium, manufacturer-certified materials"
  }, {
    title: "Transparent Pricing",
    description: "Honest, upfront quotes with no hidden fees or surprises"
  }, {
    title: "Local & Family-Owned",
    description: "We live here too—your neighbors and community members"
  }, {
    title: "Workmanship Warranty",
    description: "Our work is backed by comprehensive warranty coverage"
  }, {
    title: "Fast Response Time",
    description: "Quick turnaround on quotes and emergency repairs"
  }];
  return <section className="py-16 lg:py-24">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-display-sm font-bold mb-6">
              Why Homeowners Choose Summit Peak Roofing
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're not just roofers—we're your neighbors. Our commitment to quality, honesty, and customer satisfaction has made us the area's most trusted roofing company.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.map(reason => <div key={reason.title} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm">{reason.title}</h4>
                    <p className="text-xs text-muted-foreground">{reason.description}</p>
                  </div>
                </div>)}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl p-8 lg:p-12 text-primary-foreground bg-[sidebar-primary-foreground] bg-navy">
              <h3 className="text-2xl font-bold mb-4 text-secondary">Ready to Get Started?</h3>
              <p className="text-primary-foreground/80 mb-6">
                Schedule your free roofing inspection today and get an honest assessment of your roof's condition.
              </p>
              <Button variant="cta" size="xl" asChild className="w-full sm:w-auto">
                <Link to="/contact">
                  Request Free Estimate
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <p className="text-xs text-primary-foreground/60 mt-4">
                No obligation • No pressure • Just honest advice
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
const TestimonialsSection = () => {
  const testimonials = [{
    name: "Michael Thompson",
    location: "Riverside County",
    rating: 5,
    text: "Summit Peak replaced our entire roof after storm damage. The crew was professional, punctual, and the quality of work was outstanding. They handled everything with our insurance company too."
  }, {
    name: "Sarah Mitchell",
    location: "Oak Valley",
    rating: 5,
    text: "We had a persistent leak that two other companies couldn't fix. Summit Peak found the issue on their first inspection and repaired it the same week. Highly recommend!"
  }, {
    name: "David Chen",
    location: "Metro City",
    rating: 5,
    text: "From the initial estimate to final cleanup, everything was handled professionally. Fair pricing, no surprises, and our new roof looks incredible. Thank you Summit Peak!"
  }, {
    name: "Jennifer Martinez",
    location: "Summit Heights",
    rating: 5,
    text: "Best roofing experience we've ever had. The team was respectful of our property and finished ahead of schedule. The workmanship warranty gives us peace of mind."
  }];
  return <section className="py-16 lg:py-24 bg-secondary">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-display-sm font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it—hear from homeowners who trust Summit Peak with their roofing needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map(testimonial => <div key={testimonial.name} className="bg-card rounded-xl p-6 card-hover">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 fill-gold text-gold" />)}
              </div>
              <p className="text-foreground mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold">{testimonial.name}</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">{testimonial.location}</span>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
const CTASection = () => {
  return <section className="py-16 lg:py-24 bg-primary">
      <div className="section-container text-center">
        <h2 className="text-3xl md:text-4xl lg:text-display-sm font-bold text-primary-foreground mb-4">
          Get Peace of Mind With a Roof You Can Rely On
        </h2>
        <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
          Ready to protect your home with quality roofing? Contact us today for a free, no-obligation estimate.
        </p>
        <Button variant="cta" size="2xl" asChild>
          <Link to="/contact">
            Request Your Free Estimate
            <ArrowRight className="h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>;
};
const HomePage = () => {
  return <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CTASection />
    </>;
};
export default HomePage;