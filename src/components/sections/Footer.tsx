"use client";

import { Phone, Mail, MapPin, Smartphone } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { clearConsent } from "@/lib/cookieConsent";

const footerLinks = {
  Services: [
    { label: "Carpet Cleaning", href: "#services" },
    { label: "Upholstery Cleaning", href: "#services" },
    { label: "Hard Floor Cleaning", href: "#services" },
    { label: "Commercial Cleaning", href: "#services" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "How It Works", href: "#process" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Coverage Area", href: "#coverage" },
    { label: "Get a Quote", href: "#quote" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Logo variant="light" size="md" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Professional carpet, upholstery, and hard floor cleaning for homes
              and businesses across the CH postcode area.
            </p>
            <div className="space-y-3">
              <a
                href="tel:01513572295"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                0151 357 2295
              </a>
              <a
                href="tel:07434231504"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Smartphone className="w-4 h-4" />
                07434 231 504
              </a>
              <a
                href="mailto:Twhcarpetcleaning@outlook.com"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                Twhcarpetcleaning@outlook.com
              </a>
              <div className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  21 Girton Road, Ellesmere Port,
                  <br />
                  South Wirral, CH65 5BE
                </span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-semibold text-white mb-4">{heading}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Quick CTA */}
          <div>
            <h4 className="font-semibold text-white mb-4">Get a Quote</h4>
            <p className="text-gray-400 text-sm mb-4">
              Ready to transform your space? Get in touch for a free,
              no-obligation quote.
            </p>
            <a
              href="#quote"
              className="inline-flex items-center justify-center bg-brand-500 text-white font-semibold rounded-lg px-6 py-3 text-sm hover:bg-brand-600 transition-colors w-full mb-3"
            >
              Request a Quote
            </a>
            <a
              href="tel:01513572295"
              className="inline-flex items-center justify-center border border-gray-700 text-gray-300 font-semibold rounded-lg px-6 py-3 text-sm hover:border-gray-500 hover:text-white transition-colors w-full"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} TWH Carpet Cleaning. All rights
              reserved.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <a
                href="/privacy"
                className="text-gray-500 hover:text-gray-300 transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="/cookies"
                className="text-gray-500 hover:text-gray-300 transition-colors text-sm"
              >
                Cookie Policy
              </a>
              <button
                type="button"
                onClick={() => clearConsent()}
                className="text-gray-500 hover:text-gray-300 transition-colors text-sm cursor-pointer"
              >
                Cookie settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
