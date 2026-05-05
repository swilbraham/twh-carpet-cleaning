import { NextResponse } from "next/server";

const PLACE_ID = "ChIJeZ8wfg_eekgRzTRdPvDNckY";
const API_KEY = process.env.GOOGLE_PLACES_API_KEY || "";

// Cache reviews for 1 hour to avoid excessive API calls
let cachedData: { reviews: unknown[]; rating: number; totalReviews: number } | null = null;
let cacheTime = 0;
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

// Cache-Control: lets Vercel's CDN serve the response without re-invoking
// the function for the next 60 minutes. Cuts function-invocation cost and
// rate-limits abuse — the response is identical for everyone.
const CDN_CACHE_HEADERS = {
  "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
};

export async function GET() {
  // Return cached data if still valid
  if (cachedData && Date.now() - cacheTime < CACHE_DURATION) {
    return NextResponse.json(cachedData, { headers: CDN_CACHE_HEADERS });
  }

  // If no API key configured, return empty (component will show fallback)
  if (!API_KEY) {
    return NextResponse.json(
      { reviews: [], rating: 0, totalReviews: 0 },
      { headers: CDN_CACHE_HEADERS },
    );
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating,user_ratings_total&key=${API_KEY}`;

    const res = await fetch(url);
    const data = await res.json();

    if (data.status === "OK" && data.result) {
      const result = {
        reviews: data.result.reviews || [],
        rating: data.result.rating || 0,
        totalReviews: data.result.user_ratings_total || 0,
      };

      // Cache the result
      cachedData = result;
      cacheTime = Date.now();

      return NextResponse.json(result, { headers: CDN_CACHE_HEADERS });
    }

    return NextResponse.json(
      { reviews: [], rating: 0, totalReviews: 0 },
      { headers: CDN_CACHE_HEADERS },
    );
  } catch {
    return NextResponse.json(
      { reviews: [], rating: 0, totalReviews: 0 },
      { status: 500 }
    );
  }
}
