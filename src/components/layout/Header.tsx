import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/kasim-vending-logo.png";
const navLinks = [{
  name: "Home",
  href: "/"
}, {
  name: "Services",
  href: "/services"
}, {
  name: "Industries",
  href: "/industries"
}, {
  name: "About",
  href: "/about"
}, {
  name: "FAQ",
  href: "/faq"
}, {
  name: "Contact",
  href: "/contact"
}];
export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  return <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <nav className="container-section">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Kasim Vending" className="h-14 md:h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => <Link key={link.name} to={link.href} className={`text-sm font-medium transition-colors hover:text-accent ${isActive(link.href) ? "text-accent" : "text-foreground/80"}`}>
                {link.name}
              </Link>)}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-accent transition-colors" href="tel:+07862 061181">
              <Phone className="w-4 h-4" />
              07862 061181

            </a>
            <Button asChild className="bg-accent hover:bg-orange-dark text-accent-foreground">
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button type="button" className="lg:hidden p-2 text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map(link => <Link key={link.name} to={link.href} onClick={() => setMobileMenuOpen(false)} className={`text-base font-medium py-2 transition-colors ${isActive(link.href) ? "text-accent" : "text-foreground/80 hover:text-accent"}`}>
                  {link.name}
                </Link>)}
              <div className="pt-4 border-t border-border flex flex-col gap-3">
                <a href="tel:+1234567890" className="flex items-center gap-2 text-base font-medium text-foreground/80">
                  <Phone className="w-5 h-5" />
                  (123) 456-7890
                </a>
                <Button asChild className="bg-accent hover:bg-orange-dark text-accent-foreground w-full">
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Get a Free Quote
                  </Link>
                </Button>
              </div>
            </div>
          </div>}
      </nav>
    </header>;
};