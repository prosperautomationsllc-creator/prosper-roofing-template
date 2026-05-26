import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Mountain, Facebook, Instagram, Linkedin } from "lucide-react";
import { siteConfig } from "@/config/site";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const services = [{
    name: "Roof Repair",
    path: "/services#repair"
  }, {
    name: "Roof Replacement",
    path: "/services#replacement"
  }, {
    name: "Roof Inspections",
    path: "/services#inspections"
  }, {
    name: "Storm Damage",
    path: "/services#storm-damage"
  }, {
    name: "Commercial Roofing",
    path: "/services#commercial"
  }];
  const company = [{
    name: "About Us",
    path: "/about"
  }, {
    name: "Our Services",
    path: "/services"
  }, {
    name: "Contact",
    path: "/contact"
  }, {
    name: "Free Estimate",
    path: "/contact"
  }];
  const serviceAreas = ["Metro City", "Riverside County", "Oak Valley", "Summit Heights", "Lakeside Township"];
  return <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="section-container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-primary-foreground/10">
                <Mountain className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">Summit Peak</span>
                <span className="text-xs font-medium leading-tight text-primary-foreground/80">
                  Roofing
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/80 text-sm mb-6 leading-relaxed">
              Your trusted local roofing experts. Licensed, insured, and committed to quality craftsmanship on every project.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-primary-foreground">Services</h4>
            <ul className="space-y-2">
              {services.map(service => <li key={service.name}>
                  <Link to={service.path} className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                    {service.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-primary-foreground">Company</h4>
            <ul className="space-y-2">
              {company.map(item => <li key={item.name}>
                  <Link to={item.path} className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                    {item.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Contact & Service Areas */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-primary-foreground">Contact Us</h4>
            <div className="space-y-3 mb-6">
              <a href={siteConfig.phoneHref} className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Phone className="h-4 w-4 flex-shrink-0" />
                {siteConfig.phone}
              </a>
              <a href="mailto:owner@example.com" className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Mail className="h-4 w-4 flex-shrink-0" />
                owner@example.com
              </a>
              <div className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>Serving the greater metro area and surrounding communities</span>
              </div>
            </div>
            <h5 className="font-semibold text-sm mb-2 text-primary-foreground">Service Areas</h5>
            <p className="text-xs text-primary-foreground/70">
              {serviceAreas.join(" • ")}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="section-container py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>© {currentYear} {siteConfig.companyName}. All rights reserved.</p>
            <p>Licensed & Insured | Workmanship Warranty</p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;