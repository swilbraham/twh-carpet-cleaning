import { Phone, Mail, MapPin, Smartphone } from "lucide-react";

export default function LandingFooter() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="TWH Carpet Cleaning" className="h-10 w-auto brightness-200" />
          </div>

          {/* Contact */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-400">
            <a href="tel:01513572295" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5" />
              0151 357 2295
            </a>
            <a href="tel:07334231504" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Smartphone className="w-3.5 h-3.5" />
              07334 231 504
            </a>
            <a href="mailto:simonwilbraham@sky.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5" />
              simonwilbraham@sky.com
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              21 Girton Rd, Ellesmere Port, CH65 5BE
            </span>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 pt-6 text-center">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} TWH Carpet Cleaning. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
