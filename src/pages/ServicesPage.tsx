import { Link } from "react-router-dom";
import { Home, Building2, Wrench, RefreshCw, CloudLightning, Shield, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const services = [
  {
    id: "residential",
    icon: Home,
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
    icon: Building2,
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
    icon: Wrench,
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
    icon: RefreshCw,
    title: "Full Roof Replacements",
    description: "When repairs aren't enough, trust Summit Peak for a complete roof replacement. We guide you through every step, from material selection to final inspection.",
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
    icon: CloudLightning,
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
    icon: Shield,
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
];

const ServicesPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-primary">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-display-md font-bold text-primary-foreground mb-6">
            Professional Roofing Services You Can Count On
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            From routine repairs to complete replacements, {siteConfig.companyName} delivers quality workmanship backed by years of experience and industry-leading warranties.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 lg:py-24">
        <div className="section-container">
          <div className="space-y-16 lg:space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="cta" size="xl" asChild>
                    <Link to="/contact">
                      Get a Free Quote
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="bg-secondary rounded-2xl p-8 lg:p-12">
                    <div className="aspect-video bg-primary/5 rounded-xl flex items-center justify-center">
                      <service.icon className="h-24 w-24 text-primary/20" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Contact us today for a free, no-obligation estimate on any of our roofing services.
          </p>
          <Button variant="cta" size="2xl" asChild>
            <Link to="/contact">
              Request Your Free Estimate
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
