"use client";

import { MapPin, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const areas = [
  "Chester",
  "Ellesmere Port",
  "Wirral",
  "Neston",
  "Frodsham",
  "Helsby",
  "Runcorn",
  "Parts of North Wales",
];

const serviceAreas = [
  {
    service: "Carpet Cleaning",
    text: "Professional carpet cleaning in Chester, Ellesmere Port, Wirral, Neston, Frodsham, Helsby and Runcorn. Our hot water extraction method removes deep-set dirt, stains and allergens from your carpets.",
  },
  {
    service: "Upholstery Cleaning",
    text: "Expert sofa and upholstery cleaning across Chester, Ellesmere Port, Wirral, Neston and the CH postcode area. We restore sofas, armchairs and fabric furniture to look and smell brand new.",
  },
  {
    service: "Hard Floor Cleaning",
    text: "Tile, vinyl, laminate and stone floor cleaning in Chester, Ellesmere Port, Wirral, Frodsham, Helsby and Runcorn. Professional cleaning, stripping and sealing for homes and businesses.",
  },
];

export default function CoverageArea() {
  return (
    <section id="coverage" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Map */}
          <AnimatedSection direction="left">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2379.8!2d-2.9131!3d53.2792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487adbb2a6c2e8b7%3A0x1234567890abcdef!2s21+Girton+Rd%2C+Ellesmere+Port+CH65+5BE!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TWH Carpet Cleaning - Carpet, Upholstery and Hard Floor Cleaning in Chester, Ellesmere Port and Wirral"
                className="w-full"
              />
            </div>
          </AnimatedSection>

          {/* Right — Coverage info */}
          <AnimatedSection direction="right">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-brand-600" />
              </div>
              <span className="text-brand-500 font-semibold text-sm uppercase tracking-wider">
                Our Coverage Area
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
              Carpet, Upholstery &amp; Hard Floor Cleaning Across the{" "}
              <span className="text-brand-500">CH Postcode</span> Area
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We provide professional carpet cleaning, upholstery cleaning and
              hard floor cleaning anywhere with a CH postcode, including Chester,
              Ellesmere Port, Wirral, Neston and parts of North Wales, as well
              as West Cheshire areas like Frodsham, Helsby and Runcorn.
            </p>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 mb-6">
              <h3 className="font-bold text-gray-900 mb-4">
                Areas We Serve:
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {areas.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-brand-50 rounded-xl p-6 border border-brand-100">
              <h3 className="font-bold text-brand-900 mb-1">Our Address</h3>
              <p className="text-brand-700">
                21 Girton Road, Ellesmere Port,
                <br />
                South Wirral, CH65 5BE
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* SEO-rich service area descriptions */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {serviceAreas.map((item) => (
            <AnimatedSection key={item.service}>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 h-full">
                <h3 className="font-bold text-gray-900 mb-2 text-lg">
                  {item.service}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
