import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Phone, Menu, X, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className={`p-2 rounded-lg transition-colors ${isScrolled ? 'bg-primary' : 'bg-primary-foreground/20'}`}>
              <Mountain className={`h-6 w-6 ${isScrolled ? 'text-primary-foreground' : 'text-primary-foreground'}`} />
            </div>
            <div className="flex flex-col">
              <span className={`text-lg font-bold leading-tight transition-colors ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`}>
                Summit Peak
              </span>
              <span className={`text-xs font-medium leading-tight transition-colors ${isScrolled ? 'text-muted-foreground' : 'text-primary-foreground/80'}`}>
                Roofing
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isActive(link.path)
                    ? isScrolled ? "text-accent" : "text-primary-foreground"
                    : isScrolled ? "text-foreground" : "text-primary-foreground/90"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href={siteConfig.phoneHref} className={`flex items-center gap-2 text-sm font-semibold transition-colors ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`}>
              <Phone className="h-4 w-4" />
              {siteConfig.phone}
            </a>
            <Button variant="nav" size="lg" asChild>
              <Link to="/contact">Free Estimate</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border py-4 animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base font-medium px-4 py-2 transition-colors ${
                    isActive(link.path) ? "text-accent bg-accent/10" : "text-foreground hover:text-accent"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-4 pt-4 border-t border-border">
                <Button variant="cta" size="lg" className="w-full" asChild>
                  <Link to="/contact">Get Free Estimate</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
