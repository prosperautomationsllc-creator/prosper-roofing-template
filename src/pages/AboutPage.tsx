import { Link } from "react-router-dom";
import { Shield, Award, Users, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const iconMap: Record<string, React.ElementType> = {
  Heart, Award, Users, Shield,
};

const AboutPage = () => {
  const { about, stats } = siteConfig;

  const statItems = [
    { number: stats.yearsInBusiness, label: "Years in Business" },
    { number: stats.projectsCompleted, label: "Roofs Completed" },
    { number: stats.rating, label: "Star Rating" },
    { number: stats.satisfactionGuarantee, label: "Satisfaction Guarantee" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-primary">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-display-md font-bold text-primary-foreground mb-6">
            {about.hero.headline}
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            {about.hero.subheadline}
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-secondary">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {statItems.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{about.story.heading}</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {about.story.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
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

      {/* Values */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{about.valuesSection.heading}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {about.valuesSection.subheading}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {about.values.map((value) => {
              const Icon = iconMap[value.icon] ?? Shield;
              return (
                <div key={value.title} className="bg-card rounded-xl p-6 card-hover">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-16 lg:py-24">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{about.trustSection.heading}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {about.trustSection.items.map((item) => {
              const Icon = iconMap[item.icon] ?? Shield;
              return (
                <div key={item.title} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
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
            {about.cta.heading}
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            {about.cta.subheading}
          </p>
          <Button variant="cta" size="2xl" asChild>
            <Link to="/contact">
              {about.cta.cta}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default AboutPage;