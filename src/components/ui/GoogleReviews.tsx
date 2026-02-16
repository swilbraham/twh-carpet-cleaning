"use client";

import { useEffect, useState } from "react";
import { Star, ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const PLACE_ID = "ChIJeZ8wfg_eekgRzTRdPvDNckY";
const GOOGLE_MAPS_URL = `https://search.google.com/local/reviews?placeid=${PLACE_ID}`;

interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url?: string;
}

interface GoogleReviewsProps {
  variant?: "full" | "compact";
}

export default function GoogleReviews({ variant = "full" }: GoogleReviewsProps) {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [overallRating, setOverallRating] = useState<number>(0);
  const [totalReviews, setTotalReviews] = useState<number>(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Fetch reviews from our API route which proxies the Google Places API
    const fetchReviews = async () => {
      try {
        const res = await fetch(`/api/reviews`);
        if (res.ok) {
          const data = await res.json();
          setReviews(data.reviews || []);
          setOverallRating(data.rating || 0);
          setTotalReviews(data.totalReviews || 0);
          setLoaded(true);
        }
      } catch {
        // Silently fail — fallback UI will show
        setLoaded(true);
      }
    };
    fetchReviews();
  }, []);

  function StarRating({ rating }: { rating: number }) {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i <= rating
                ? "fill-amber-400 text-amber-400"
                : "fill-gray-200 text-gray-200"
            }`}
          />
        ))}
      </div>
    );
  }

  // If API not configured yet, show a Google Reviews link button with static content
  if (!loaded || reviews.length === 0) {
    return (
      <section className={`${variant === "full" ? "py-16 md:py-24" : "py-12"} bg-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://www.google.com/favicon.ico"
                alt="Google"
                className="w-6 h-6"
              />
              <h2 className={`${variant === "full" ? "text-3xl sm:text-4xl" : "text-2xl"} font-extrabold text-gray-900`}>
                Google Reviews
              </h2>
            </div>

            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-gray-700 font-semibold text-lg">5.0</span>
            </div>

            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              See what our customers are saying about us on Google.
            </p>

            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border-2 border-gray-200 rounded-xl px-6 py-3 font-semibold text-gray-700 hover:border-brand-500 hover:text-brand-600 transition-all shadow-sm hover:shadow-md"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_24dp.png"
                alt="Google"
                className="w-5 h-5"
              />
              Read Our Google Reviews
              <ExternalLink className="w-4 h-4" />
            </a>
          </AnimatedSection>
        </div>
      </section>
    );
  }

  // Live reviews from API
  return (
    <section className={`${variant === "full" ? "py-16 md:py-24" : "py-12"} bg-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google"
              className="w-6 h-6"
            />
            <h2 className={`${variant === "full" ? "text-3xl sm:text-4xl" : "text-2xl"} font-extrabold text-gray-900`}>
              Google Reviews
            </h2>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${
                    i <= Math.round(overallRating)
                      ? "fill-amber-400 text-amber-400"
                      : "fill-gray-200 text-gray-200"
                  }`}
                />
              ))}
            </div>
            <span className="text-gray-700 font-semibold text-lg">
              {overallRating.toFixed(1)}
            </span>
            <span className="text-gray-500">
              ({totalReviews} review{totalReviews !== 1 ? "s" : ""})
            </span>
          </div>
        </AnimatedSection>

        <div className={`grid ${variant === "full" ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-3"} gap-6 mb-10`}>
          {reviews.slice(0, variant === "full" ? 6 : 3).map((review, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.08}>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  {review.profile_photo_url && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={review.profile_photo_url}
                      alt={review.author_name}
                      className="w-10 h-10 rounded-full"
                    />
                  )}
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">
                      {review.author_name}
                    </p>
                    <p className="text-gray-400 text-xs">
                      {review.relative_time_description}
                    </p>
                  </div>
                </div>
                <StarRating rating={review.rating} />
                <p className="text-gray-600 text-sm leading-relaxed mt-3 flex-grow">
                  {review.text.length > 200
                    ? `${review.text.slice(0, 200)}...`
                    : review.text}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border-2 border-gray-200 rounded-xl px-6 py-3 font-semibold text-gray-700 hover:border-brand-500 hover:text-brand-600 transition-all shadow-sm hover:shadow-md"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_24dp.png"
              alt="Google"
              className="w-5 h-5"
            />
            See All Reviews on Google
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
