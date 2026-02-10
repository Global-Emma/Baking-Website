import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, Instagram, Facebook, MessageCircle, CreditCard, Smartphone, Wallet } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-3">Toria Bakes</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Freshly baked delights served with love, 24 hours a day. Your cozy spot for great food and warm vibes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Menu", path: "/menu" },
                { label: "Services", path: "/services" },
                { label: "Gallery", path: "/gallery" },
                { label: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                14 Nnadozie Street, Umuike, Awka
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <a href="tel:+2347032557389" className="hover:text-primary-foreground transition-colors">0703 255 7389</a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 shrink-0" />
                Open 24 Hours
              </li>
            </ul>
          </div>

          {/* Payments & Social */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">We Accept</h4>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1 text-sm text-primary-foreground/70">
                <CreditCard className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-1 text-sm text-primary-foreground/70">
                <Wallet className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-1 text-sm text-primary-foreground/70">
                <Smartphone className="w-5 h-5" />
              </div>
            </div>
            <h4 className="font-display text-lg font-semibold mb-3">Follow Us</h4>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Facebook" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://wa.me/2347032557389" aria-label="WhatsApp" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center text-sm text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} Toria Bakes. All rights reserved.</p>
          <p className="mt-1">Free street parking &amp; free parking lot available</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
