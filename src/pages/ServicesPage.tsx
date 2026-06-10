import { Link } from "react-router-dom";
import {
  Home, Building2, Wrench, RefreshCw,
  CloudLightning, Shield, CheckCircle, ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const iconMap: Record<string, React.ElementType> = {
  Home, Building2, Wrench, RefreshCw, CloudLightning, Shield,
};

const ServicesPage = () => {
  const { servicesPage } = siteConfig;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-primary">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-display-md font-bold text-primary-foreground mb-6">
            {servicesPage.hero.headline}
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            {servicesPage.hero.subheadline}
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 lg:py-24">
        <div className="section-container">
          <div className="space-y-16 lg:space-y-24">
            {servicesPage.items.map((service, index) => {
              const Icon = iconMap[service.icon] ?? Wrench;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center scroll-mt-24 lg:scroll-mt-28 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <Icon className="h-8 w-8 text-primary" />
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
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="bg-secondary rounded-2xl p-8 lg:p-12">
                      <div className="aspect-video bg-primary/5 rounded-xl flex items-center justify-center">
                        <Icon className="h-24 w-24 text-primary/20" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            {servicesPage.cta.heading}
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            {servicesPage.cta.subheading}
          </p>
          <Button variant="cta" size="2xl" asChild>
            <Link to="/contact">
              {servicesPage.cta.cta}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;