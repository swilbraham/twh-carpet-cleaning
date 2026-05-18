"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { clearConsent } from "@/lib/cookieConsent";

export default function CookiesPage() {
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
          Cookie Policy
        </h1>
        <p className="text-gray-500 text-sm mb-10">
          Last updated: {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long" })}
        </p>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">
            What are cookies?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Cookies are small text files placed on your device when you visit a
            website. They help websites remember information about your visit,
            such as your preferences and settings.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">
            Cookies we use
          </h2>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            Strictly necessary
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            We store your cookie preference in your browser&apos;s local storage
            so that we don&apos;t ask again on every page. This is essential to
            running the site and is always on.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            Functional &mdash; only with your consent
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you accept cookies, we load a Google Reviews widget provided by
            Elfsight. Elfsight may set cookies on your device to display the
            widget and measure usage. See{" "}
            <a
              href="https://elfsight.com/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-500 hover:text-brand-600 underline"
            >
              Elfsight&apos;s privacy policy
            </a>{" "}
            for details.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            Third-party services on form submission
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            When you submit a quote form, your details are sent to Web3Forms
            (web3forms.com), which forwards them to our email. This only
            happens when you actively submit a form. See{" "}
            <a
              href="https://web3forms.com/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-500 hover:text-brand-600 underline"
            >
              Web3Forms&apos; privacy policy
            </a>
            .
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">
            Managing your preferences
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            You can change your cookie choice at any time. Click the button
            below to clear your preference and see the cookie banner again.
          </p>
          <button
            type="button"
            onClick={() => clearConsent()}
            className="bg-brand-500 text-white font-semibold rounded-lg px-5 py-2.5 text-sm hover:bg-brand-600 transition-colors cursor-pointer mb-6"
          >
            Reset cookie preferences
          </button>
          <p className="text-gray-700 leading-relaxed mb-4">
            You can also block or delete cookies through your browser settings.
            Note that some parts of the site may not work as expected without
            cookies.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Contact</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Questions about this policy? Email us at{" "}
            <a
              href="mailto:Twhcarpetcleaning@outlook.com"
              className="text-brand-500 hover:text-brand-600 underline"
            >
              Twhcarpetcleaning@outlook.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
