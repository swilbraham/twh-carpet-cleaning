"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import Button from "./Button";
import Logo from "./Logo";

export default function StickyHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#process" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "About", href: "#about" },
    { label: "Coverage", href: "#coverage" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#">
            <Logo variant={scrolled ? "dark" : "light"} size="sm" />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-brand-500 ${
                  scrolled ? "text-gray-700" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:01513572295"
              className={`flex items-center gap-2 text-sm font-medium ${
                scrolled ? "text-brand-700" : "text-white"
              }`}
            >
              <Phone className="w-4 h-4" />
              0151 357 2295
            </a>
            <Button href="#quote" size="sm">
              Get a Free Quote
            </Button>
          </div>

          <button
            className={`lg:hidden p-2 ${scrolled ? "text-gray-700" : "text-white"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/20">
            <nav className="flex flex-col gap-3 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium py-2 ${
                    scrolled ? "text-gray-700" : "text-white"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-3 border-t border-white/10">
                <a
                  href="tel:01513572295"
                  className={`flex items-center gap-2 text-sm font-semibold py-2 ${
                    scrolled ? "text-brand-700" : "text-white"
                  }`}
                >
                  <Phone className="w-4 h-4" />
                  0151 357 2295
                </a>
                <a
                  href="tel:07434231504"
                  className={`flex items-center gap-2 text-sm font-semibold py-2 ${
                    scrolled ? "text-brand-700" : "text-white"
                  }`}
                >
                  <Phone className="w-4 h-4" />
                  07434 231 504
                </a>
              </div>
              <Button
                href="#quote"
                size="sm"
                className="mt-2 w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Free Quote
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
