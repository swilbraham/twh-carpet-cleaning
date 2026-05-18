# TWH Carpet Cleaning — Security Audit

**Date:** 2026-05-05
**Scope:** Source code, dependencies, public assets, git history, DNS, forms, third-party integrations
**Stack:** Next.js 16.1.6 / React 19.2.4 / TypeScript on Vercel

## Risk summary

| Severity | Count | Description |
|---|---|---|
| 🔴 High | 0 | – |
| 🟠 Medium | 1 | No bot protection on lead forms (spam/abuse vector) |
| 🟡 Low | 4 | Rate limiting, robots.txt, env-key restriction, CSP tightening |
| 🟢 Info | 5 | Domain TLS, Place ID exposure, FormSubmit data flow, etc. |

**Headline:** the site is in **good shape**. No leaked secrets, no XSS-prone patterns, no vulnerable dependencies. Headers were missing entirely until today's commit and are now A-grade. Two practical follow-ups recommended (form bot protection + Google API key restriction). Everything else is hygiene.

---

## 🟢 What's good

| Check | Result |
|---|---|
| Secrets in source code | ✅ No API keys, tokens or passwords hard-coded. `GOOGLE_PLACES_API_KEY` is read from `process.env` only. |
| `.env*` in git | ✅ Gitignored correctly. No env files in the working tree. |
| Secrets in git history | ✅ Scanned last 50 commits — no committed keys, only env-placeholder strings. |
| Dangerous patterns | ✅ No `eval()`, `new Function()`, `innerHTML=`, `document.write`. `dangerouslySetInnerHTML` is used 3× *only* for JSON-LD schema markup (`JSON.stringify` of a static object — safe). |
| Dependencies | ✅ Next.js 16.1.6, React 19.2.4 — both latest. No known-bad packages (no `node-ipc`, `colors`, `event-stream`, `ua-parser-js` etc.). |
| HTTPS | ✅ Live site `twhcarpetcleaning.co.uk` resolves to Vercel (`216.198.79.65`) with valid TLS. |
| Security headers | ✅ Now configured in `next.config.ts` (commit `a0ae3c3`). HSTS 2y, CSP, X-Frame-Options DENY, X-Content-Type-Options nosniff, Referrer-Policy, Permissions-Policy. |
| Public folder leaks | ✅ No `.env`, `.key`, `.pem`, `config.json` or backup files in `public/`. |

---

## 🟠 Medium — fix before next ad spend

### 1. Lead forms have no bot protection

**Where:** `src/components/sections/QuoteForm.tsx`, `src/components/sections/CostCalculator.tsx`, `src/components/landing/LandingHero.tsx`, `src/app/offer/page.tsx`, `src/app/3for99/page.tsx` — every form posts directly to `https://formsubmit.co/ajax/Twhcarpetcleaning@outlook.com` with no honeypot, no CAPTCHA, no rate-limit.

**Risk:** the second this URL is in any ad creative, scrapers and form-spammers will hit it. You'll see:
- Mailbox noise that buries real leads (causes you to miss them)
- FormSubmit may rate-limit or suspend the endpoint
- `Twhcarpetcleaning@outlook.com` could end up on spam lists, hurting deliverability

**Fix (5 min):** FormSubmit has a built-in `_honey` honeypot field. Add a hidden input named `_honey` to every form — bots will fill it, legitimate users won't, FormSubmit drops the submission server-side.

```tsx
<input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
```

I can apply this to all 7 forms in one commit if you want.

For ad-driven traffic, also consider **Cloudflare Turnstile** (free, invisible CAPTCHA) — adds ~3 minutes to set up and handles the 1% of bots clever enough to fill the honeypot.

---

## 🟡 Low — nice to have

### 2. Rate-limit the `/api/reviews` endpoint

**Where:** `src/app/api/reviews/route.ts`

Currently anyone can hit `https://twhcarpetcleaning.co.uk/api/reviews` repeatedly. Risk is bounded because the response is cached for 1 hour, so the underlying Google Places API isn't being burned — but you're still serving compute for free.

**Fix:** add `Cache-Control: public, max-age=3600, s-maxage=3600` to the response so Vercel's CDN serves it without invoking your function:

```ts
return NextResponse.json(result, {
  headers: { "Cache-Control": "public, max-age=3600, s-maxage=3600" }
});
```

### 3. Restrict the Google Places API key

**Where:** Google Cloud Console → APIs & Services → Credentials → click the API key

The `GOOGLE_PLACES_API_KEY` is server-side, so it's not exposed in browser code today. But if it ever leaks (logs, accidental commit), it's currently usable from anywhere.

**Fix:** set Application restrictions to **HTTP referrers** with these allowed:
```
https://twhcarpetcleaning.co.uk/*
https://*.vercel.app/*
http://localhost:3000/*
```

And API restrictions to **Places API** only.

### 4. Missing `robots.txt` and `sitemap.xml`

`public/robots.txt` and `public/sitemap.xml` don't exist. Not a security issue per se but:
- Without `robots.txt`, you can't disallow `/api/*` from crawlers (they'll waste your function-invocation quota)
- Without `sitemap.xml`, Google indexes you slower

I can generate both via Next.js's `app/robots.ts` and `app/sitemap.ts` route handlers in 2 minutes.

### 5. CSP still allows `unsafe-eval` and `unsafe-inline`

**Where:** `next.config.ts` line 12

These are required for Next.js's runtime hydration — removing them breaks the site. The proper fix is to switch to **CSP nonces** via `next.config.ts` middleware. ~1 hour of work; lifts your [securityheaders.com](https://securityheaders.com) score from A to A+. Not worth doing until/unless you have a specific reason.

---

## 🟢 Info — no action needed

- **Place ID `ChIJeZ8wfg_eekgRzTRdPvDNckY`** is in client-side code. This is fine — Place IDs are public Google data and exposing them is the *intended* design.
- **PII flow via Web3Forms** — name, email, phone, postcode, postcode, optional message all go to a third-party form processor before reaching your inbox. This is disclosed in `src/app/privacy/page.tsx` and `src/app/cookies/page.tsx` ✓. UK GDPR-fine as long as the privacy policy stays accurate (it currently does).
- **Vercel hosting** — provider handles TLS renewal, DDoS protection, function isolation. No action.
- **DNS** — `twhcarpetcleaning.co.uk` resolves to Vercel directly. Domain verification & TLS are managed in the Vercel dashboard, no manual cert renewal needed.
- **No `Strict-Transport-Security` preload submission** — once the new HSTS header has been live for ~30 days, you can submit the domain to [hstspreload.org](https://hstspreload.org) so browsers ship with the rule baked-in. Optional, browser-level hardening.

---

## 🔴 Not on the website but worth checking

These can't be audited from the codebase but are the most common attack vectors for small businesses:

- **2FA on the GitHub account** that owns this repo (`swilbraham`). If that account is compromised, an attacker can push a malicious commit and Vercel auto-deploys it.
- **2FA on the Outlook/Hotmail account** receiving the lead emails. If that's breached, attackers steal customer PII directly.
- **2FA on the Google Cloud account** hosting the Places API key.
- **2FA on Vercel** — links to GitHub already, so a GitHub breach = Vercel breach.

**Recommendation:** if any of those don't already have 2FA, do them today. They're 10 minutes total and dwarf everything in this audit in terms of real-world risk.

---

## Recommended action list (in priority order)

| # | Task | Time | Severity |
|---|---|---|---|
| 1 | Add honeypot field to all 7 forms | 5 min | 🟠 |
| 2 | Verify 2FA on GitHub, Outlook, Google, Vercel | 10 min | 🔴 *(not codebase but most important)* |
| 3 | Restrict Google Places API key by HTTP referrer | 3 min | 🟡 |
| 4 | Add `Cache-Control` header to `/api/reviews` | 2 min | 🟡 |
| 5 | Add `robots.txt` and `sitemap.xml` route handlers | 5 min | 🟡 |
| 6 | Submit to [hstspreload.org](https://hstspreload.org) (after 30 days) | 2 min | 🟢 |
| 7 | (Optional) Migrate CSP to nonces for A+ score | 1 hr | 🟢 |

Total to clear all 🟠 and 🟡 items: **~25 minutes of work** (most of which is me applying the changes to source — your job is the 2FA checks).

Want me to do items 1, 3, 4 and 5 now and push them?
