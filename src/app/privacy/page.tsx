import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How TWH Carpet Cleaning collects, uses and protects your personal data.",
  alternates: { canonical: "https://twhcarpetcleaning.co.uk/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-brand-500 hover:text-brand-600 text-sm font-medium mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-500 text-sm mb-10">
          Last updated:{" "}
          {new Date().toLocaleDateString("en-GB", {
            year: "numeric",
            month: "long",
          })}
        </p>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">
            Who we are
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            TWH Carpet Cleaning (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
            &ldquo;our&rdquo;) operates the website twhcarpetcleaning.co.uk. We
            are based at 21 Girton Road, Ellesmere Port, South Wirral, CH65 5BE.
            For privacy questions, contact{" "}
            <a
              href="mailto:Twhcarpetcleaning@outlook.com"
              className="text-brand-500 hover:text-brand-600 underline"
            >
              Twhcarpetcleaning@outlook.com
            </a>
            .
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">
            What we collect
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            When you submit a quote form we collect: your name, email address,
            phone number, postcode and any details you provide about the
            cleaning work needed.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">
            Why we collect it
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We use your information solely to respond to your enquiry and, if
            you book, to provide the cleaning service you&apos;ve requested.
            The legal basis is your consent (UK GDPR Article 6(1)(a)) or
            performance of a contract (Article 6(1)(b)) once you book.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">
            Who sees it
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Form submissions are processed by FormSubmit (formsubmit.co), which
            forwards them to our email. We do not sell or share your details
            with third parties for marketing.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">
            How long we keep it
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We keep enquiry emails for up to 24 months unless you become a
            customer, in which case we retain customer records for up to 7
            years to meet HMRC accounting requirements.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">
            Your rights
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Under UK GDPR you have the right to access, correct, delete or
            restrict use of your personal data, and to object to processing or
            ask for it in a portable format. Email us at{" "}
            <a
              href="mailto:Twhcarpetcleaning@outlook.com"
              className="text-brand-500 hover:text-brand-600 underline"
            >
              Twhcarpetcleaning@outlook.com
            </a>{" "}
            and we&apos;ll respond within one month.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you&apos;re unhappy with how we&apos;ve handled your data, you
            can complain to the Information Commissioner&apos;s Office (
            <a
              href="https://ico.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-500 hover:text-brand-600 underline"
            >
              ico.org.uk
            </a>
            ).
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Cookies</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            For details on the cookies this site uses, see our{" "}
            <Link
              href="/cookies"
              className="text-brand-500 hover:text-brand-600 underline"
            >
              cookie policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
