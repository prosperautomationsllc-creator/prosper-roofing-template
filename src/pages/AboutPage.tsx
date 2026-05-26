import { Link } from "react-router-dom";
import { Shield, Award, Users, Heart, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const values = [
  {
    icon: Heart,
    title: "Customer-First Mindset",
    description: "Every decision we make starts with what's best for our customers. We treat your home like it's our own.",
  },
  {
    icon: Award,
    title: "Quality Craftsmanship",
    description: "We never cut corners. Every project is completed to the highest standards using premium materials.",
  },
  {
    icon: Users,
    title: "Community Focus",
    description: "As a local, family-owned business, we're invested in our community's homes and neighborhoods.",
  },
  {
    icon: Shield,
    title: "Integrity & Honesty",
    description: "Transparent pricing, honest recommendations, and no high-pressure sales tactics. Ever.",
  },
];

const stats = [
  { number: "10+", label: "Years in Business" },
  { number: "1,500+", label: "Roofs Completed" },
  { number: "5.0", label: "Star Rating" },
  { number: "100%", label: "Satisfaction Guarantee" },
];

const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-primary">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-display-md font-bold text-primary-foreground mb-6">
            Built on Trust. Focused on Quality.
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
          {siteConfig.companyName} is more than a roofing company—we're your neighbors, dedicated to protecting the homes and businesses in our community.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-secondary">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 lg:py-24">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                {siteConfig.companyName} was founded over a decade ago with a simple mission: provide honest, quality roofing services that homeowners can trust. What started as a small family operation has grown into one of the region's most respected roofing companies.
                </p>
                <p>
                  Our founder began in the roofing industry working alongside his father, learning the trade from the ground up. Those early lessons in craftsmanship, integrity, and hard work remain at the core of everything we do today.
                </p>
                <p>
                  We've built our reputation one roof at a time, earning the trust of thousands of homeowners through quality work, fair pricing, and genuine care for our customers. When you choose Summit Peak, you're not just getting a contractor—you're getting a partner committed to protecting your home.
                </p>
              </div>
            </div>
            <div className="bg-secondary rounded-2xl p-8 lg:p-12">
              <div className="aspect-square bg-primary/5 rounded-xl flex items-center justify-center">
                <Users className="h-32 w-32 text-primary/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide every project we take on and every interaction with our customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-card rounded-xl p-6 card-hover">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-16 lg:py-24">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Trust Summit Peak</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Licensed & Insured</h3>
              <p className="text-muted-foreground">
                Fully licensed and insured for your protection. We carry comprehensive liability and workers' compensation coverage.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Warranty-Backed Work</h3>
              <p className="text-muted-foreground">
                Our workmanship warranty gives you peace of mind. We stand behind every project with comprehensive coverage.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Serving Local Communities</h3>
              <p className="text-muted-foreground">
                We're proud to serve homeowners throughout the region. Our team knows local building codes and weather challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Schedule a Free Roofing Inspection
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Let our experts assess your roof's condition and provide honest recommendations—no obligation, no pressure.
          </p>
          <Button variant="cta" size="2xl" asChild>
            <Link to="/contact">
              Schedule Your Inspection
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
