# SEO Implementation Guide - Complete Breakdown

This document explains every SEO file in this project, line by line, and how each part helps Google and other search engines understand and rank your site.

---

## Table of Contents

1. [layout.tsx - Root Metadata & Viewport](#1-layouttsx---root-metadata--viewport)
2. [manifest.ts - Web App Manifest](#2-manifestts---web-app-manifest)
3. [opengraph-image.tsx - Homepage Social Image](#3-opengraph-imagetsx---homepage-social-image)
4. [page.tsx - Structured Data (JSON-LD)](#4-pagetsx---structured-data-json-ld)
5. [robots.ts - Crawl Rules](#5-robotsts---crawl-rules)
6. [sitemap.ts - XML Sitemap](#6-sitemaptsx---xml-sitemap)
7. [/api/og - Dynamic Open Graph Images](#7-apiog---dynamic-open-graph-images)
8. [JsonLd Component - Reusable Structured Data](#8-jsonld-component---reusable-structured-data)

---

## 1. layout.tsx - Root Metadata & Viewport

**File:** `/apps/web/src/app/layout.tsx`

This is the most critical SEO file. It defines global metadata that applies to every page on your site.

### Viewport Export (Lines 16-26)

```tsx
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};
```

**What it does for SEO:**

- **`width: "device-width"`** - Tells mobile browsers to use the device's native width instead of zooming out. Google's mobile-first indexing requires this.
- **`initialScale: 1`** - Ensures the page loads at 100% zoom on mobile. Pages that don't do this are penalized in mobile search.
- **`maximumScale: 5`** - Allows users to zoom in up to 5x. Accessibility is a ranking factor.
- **`userScalable: true`** - Allows pinch-to-zoom. Disabling this hurts accessibility scores.
- **`themeColor`** - Changes browser UI color to match your brand. Google uses this for user experience signals in mobile search.

**Why it's separate:** Next.js 14+ requires viewport to be a separate export, not inside metadata object.

---

### Metadata Base URL (Line 28)

```tsx
metadataBase: new URL(siteConfig.url),
```

**What it does for SEO:**

- Sets the canonical domain to `https://olyxui.com`
- All relative URLs in metadata (like `/opengraph-image`) become absolute URLs (`https://olyxui.com/opengraph-image`)
- Google requires absolute URLs for Open Graph images and canonical tags
- Without this, Next.js throws errors and social media crawlers can't find your images

---

### Title Template (Lines 29-32)

```tsx
title: {
  default: siteConfig.title,
  template: `%s - ${siteConfig.name}`,
},
```

**What it does for SEO:**

- **`default`** - Homepage title: "Modern React Component Library Built on Base UI - Olyx UI"
- **`template`** - Pattern for all other pages: "Button - Olyx UI", "Alert - Olyx UI", etc.
- **`%s`** - Gets replaced with each page's specific title
- **Why it matters:** Title tags are the #1 on-page SEO factor. Google shows ~60 characters in search results. This keeps titles unique, keyword-rich, and branded.

---

### Core Metadata (Lines 33-36)

```tsx
description: siteConfig.description,
keywords: siteConfig.keywords as string[],
authors: [{ name: siteConfig.creator, url: siteConfig.github }],
creator: siteConfig.creator,
```

**What it does for SEO:**

- **`description`** - Meta description shown in Google search results (160 chars max). This is your sales pitch in the SERP.
- **`keywords`** - Not used for ranking anymore, but some tools/crawlers still read it. Harmless to include 10-15 target keywords.
- **`authors`** - Signals authorship and expertise (E-E-A-T signal). Google can connect your content to your author profile.
- **`creator`** - Same as authors but for social media platforms. Shows attribution in Twitter/X cards.

---

### Open Graph Metadata (Lines 37-51)

```tsx
openGraph: {
  type: "website",
  locale: "en_US",
  url: siteConfig.url,
  siteName: siteConfig.name,
  title: siteConfig.title,
  description: siteConfig.description,
  images: [
    {
      url: siteConfig.ogImage,
      width: 1200,
      height: 630,
      alt: `${siteConfig.name} - Modern React Component Library`,
    },
  ],
},
```

**What it does for SEO:**

- **`type: "website"`** - Tells Facebook/LinkedIn this is a website homepage (not article/product/video)
- **`locale: "en_US"`** - Language/region targeting. Helps Google show your site to English-speaking searchers.
- **`url`** - Canonical URL that social platforms should reference. Prevents duplicate content issues when people share your site.
- **`siteName`** - Your brand name. Shows in Facebook/LinkedIn share previews.
- **`title`** - The title that appears when someone shares your link on social media. Can be different from page `<title>`.
- **`description`** - The description shown below the title in social shares. Ideally 125 chars or less.
- **`images`** - The image shown in social media cards:
  - **1200x630px** - Facebook/LinkedIn/Twitter optimal size
  - **`alt` text** - Accessibility and context for screen readers and image search

**Why it matters:** Social signals (shares, clicks from social) are indirect ranking factors. A good OG image gets 3-5x more clicks in social feeds, leading to more traffic and potential backlinks.

---

### Twitter Card Metadata (Lines 52-58)

```tsx
twitter: {
  card: "summary_large_image",
  title: siteConfig.title,
  description: siteConfig.description,
  images: [siteConfig.ogImage],
  creator: siteConfig.twitter,
},
```

**What it does for SEO:**

- **`card: "summary_large_image"`** - Shows large hero image in Twitter/X feed (instead of tiny thumbnail). Gets 2-3x more engagement.
- **`title`** - Title shown in Twitter card (can differ from OG title)
- **`description`** - Description in Twitter card (280 char limit)
- **`images`** - Image shown in card (same 1200x630 OG image works)
- **`creator: "@yassir_rouane"`** - Links to your Twitter profile. Builds brand authority and can drive follows.

**Why it matters:** Twitter/X is huge for developer communities. Good cards = more clicks = more traffic = positive user signals for Google.

---

### Canonical URL (Lines 59-61)

```tsx
alternates: {
  canonical: "/",
},
```

**What it does for SEO:**

- Tells Google "this is the official URL for this content"
- Prevents duplicate content penalties when pages have multiple URLs (with/without trailing slash, www vs non-www, query parameters)
- For homepage, canonical is just "/"
- For docs pages, each page sets its own canonical: `/docs/components/button`, etc.

**Critical:** Without canonical tags, Google might index duplicate versions of your pages and split their ranking power.

---

### Robots Directives (Lines 62-72)

```tsx
robots: {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
},
```

**What it does for SEO:**

- **`index: true`** - "Google, please index this page and show it in search results"
- **`follow: true`** - "Google, please follow all links on this page and crawl them too"
- **`googleBot`** - Specific instructions just for Google's crawler:
  - **`index: true`** - Redundant but explicit permission to index
  - **`follow: true`** - Permission to follow links
  - **`max-video-preview: -1`** - Show unlimited video preview length in search results (no video limit)
  - **`max-image-preview: "large"`** - Show large image thumbnails in Google Images and search results (better CTR)
  - **`max-snippet: -1`** - Show unlimited text snippet length in search results (instead of truncating at 160 chars)

**Why it matters:** These directives control how much of your content Google can show. Larger previews = more informative results = higher click-through rate.

---

## 2. manifest.ts - Web App Manifest

**File:** `/apps/web/src/app/manifest.ts`

Generates `/manifest.json` - a JSON file that describes your site as a Progressive Web App (PWA).

```typescript
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Olyx UI",
    short_name: "Olyx",
    description: "50+ accessible, composable React components...",
    start_url: "/",
    display: "browser",
    background_color: "#09090b",
    theme_color: "#09090b",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
```

**What each field does for SEO:**

- **`name: "Olyx UI"`** - Full app name. Shows when user adds site to home screen. Google reads this for "app name" search queries.
- **`short_name: "Olyx"`** - Abbreviated name for small spaces (home screen icon label on mobile)
- **`description`** - App description. Google uses this as an additional content signal. Reinforce keywords here.
- **`start_url: "/"`** - Where the app starts when launched from home screen. Always leads to your homepage = more homepage visits = stronger domain authority.
- **`display: "browser"`** - Open in normal browser (not standalone app). Keeps navigation UI visible for better UX.
- **`background_color`** - Splash screen background while app loads. Matches your dark theme `#09090b`.
- **`theme_color`** - Browser UI color. Matches dark theme. Consistent branding = better user experience signals.
- **`icons`** - App icons for home screen. Needs multiple sizes ideally (192x192, 512x512). Your favicon is a fallback.

**Why it matters for SEO:**

1. **Mobile-first indexing:** Google prioritizes mobile-optimized sites. PWA signals (manifest.json) indicate mobile readiness.
2. **Installability:** Sites with manifests can be "installed" as apps. This drives engagement metrics (time on site, return visits) which are ranking signals.
3. **Lighthouse score:** Google's PageSpeed Insights checks for manifest.json. Missing it hurts your PWA score.

**Recommendations:**
- Add 192x192 and 512x512 PNG icons (referenced in manifest)
- Set `display: "standalone"` if you want fullscreen app mode (but keep as "browser" for documentation sites)

---

## 3. opengraph-image.tsx - Homepage Social Image

**File:** `/apps/web/src/app/opengraph-image.tsx`

Generates `/opengraph-image` - a dynamic PNG image (1200x630) used when people share your homepage on social media.

### Runtime Configuration (Lines 3-9)

```tsx
export const runtime = "edge";
export const alt = "Olyx UI - Modern React Component Library";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";
```

**What it does for SEO:**

- **`runtime: "edge"`** - Generates image at the edge (CDN servers worldwide), not on your main server. Faster image loads = better user experience = better engagement metrics.
- **`alt`** - Alt text for the image. Screen readers and image search crawlers use this. Keyword-rich but natural.
- **`size: 1200x630`** - Industry standard OG image size:
  - **1200px width** - Facebook/LinkedIn requirement
  - **630px height** - Optimal aspect ratio (1.91:1)
  - Any other size gets cropped/stretched, looking unprofessional
- **`contentType: "image/png"`** - PNG format (lossless). JPEG works too but PNG has better text clarity.

---

### Image Generation (Lines 11-80)

```tsx
export default function Image() {
  return new ImageResponse(
    <div style={{...}}>
      {/* Dark background #09090b */}
      
      <div style={{ fontSize: 72, fontWeight: 700, color: "#ffffff" }}>
        Olyx UI
      </div>
      
      <div style={{ fontSize: 28, color: "#a1a1aa" }}>
        Modern React Component Library Built on Base UI
      </div>
      
      <div>
        {["50+ Components", "Accessible", "Native CSS", "Open Source"].map((tag) => (
          <div>{tag}</div>
        ))}
      </div>
    </div>,
    { ...size },
  );
}
```

**What it does for SEO:**

- **Large brand name (72px font)** - Instantly recognizable in social feeds. Brand recall = higher CTR when people see your site again in search results.
- **Keyword-rich subtitle** - "Modern React Component Library Built on Base UI" contains multiple search keywords:
  - "React Component Library" - high-volume keyword
  - "Modern" - emotional trigger
  - "Base UI" - specific technology keyword
- **Feature badges** - "50+ Components", "Accessible", "Native CSS", "Open Source"
  - These are social proof elements that increase perceived value
  - More clicks from social = more traffic = positive ranking signal
- **Dark theme (#09090b background)** - Matches your site. Consistent branding = professional appearance = higher trust = better engagement

**Why it matters for SEO:**

1. **Social CTR:** A good OG image gets 3x more clicks in social feeds. More traffic = Google sees your site is popular.
2. **Bounce rate:** When users click from social and see matching visuals on your site, they stay longer. Low bounce rate = positive ranking signal.
3. **Backlinks:** Popular social shares often lead to blog mentions and backlinks. Links = #1 off-page SEO factor.

**Image appears in:**
- Facebook posts/shares
- Twitter/X cards
- LinkedIn posts
- Slack link previews
- Discord embeds
- iMessage previews
- WhatsApp previews

---

## 4. page.tsx - Structured Data (JSON-LD)

**File:** `/apps/web/src/app/page.tsx`

Adds 4 structured data schemas to your homepage using JSON-LD (JavaScript Object Notation for Linked Data). This is how you "talk" to Google in a language it understands perfectly.

---

### WebSite Schema (Lines 10-20)

```tsx
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  inLanguage: "en",
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
  },
};
```

**What each line does for SEO:**

- **`@context: "https://schema.org"`** - Tells Google this is Schema.org structured data (the vocabulary Google/Bing/Yandex support)
- **`@type: "WebSite"`** - This is a website entity (not an article, person, product, etc.)
- **`name: "Olyx UI"`** - Official site name. Google uses this for knowledge panel and site name in search results.
- **`url: "https://olyxui.com"`** - Canonical homepage URL. Google uses this to identify your site's primary domain.
- **`description`** - Reinforces what your site is about. Multiple signal sources = stronger relevance.
- **`inLanguage: "en"`** - Content is in English. Google uses this for regional search targeting (en-US, en-GB, etc. all match "en").
- **`publisher`** - Who publishes this website. Links to your organization entity. Creates entity relationships in Google's Knowledge Graph.

**Why it matters:** Google's search results are becoming entity-based, not just keyword-based. Defining your WebSite entity makes you eligible for:
- Sitelinks (sub-links shown below your main result)
- Site name display (instead of URL)
- Knowledge panel (right-side info box)

---

### Organization Schema (Lines 22-36)

```tsx
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: {
    "@type": "ImageObject",
    url: `${siteConfig.url}/logo.png`,
    width: 512,
    height: 512,
  },
  sameAs: [
    siteConfig.github,
    `https://x.com/${siteConfig.twitter.replace("@", "")}`,
  ],
  foundingDate: "2025",
};
```

**What each line does for SEO:**

- **`@type: "Organization"`** - You're a company/org, not just a person. Orgs get better SERP features.
- **`name: "Olyx UI"`** - Official organization name. Must match WebSite schema name.
- **`url`** - Organization homepage. Canonical URL.
- **`logo`** - Your brand logo:
  - **`@type: "ImageObject"`** - Structured as an image entity
  - **`url: "/logo.png"`** - Absolute URL to 512x512 PNG logo
  - **`width: 512, height: 512`** - Google requires square logos (1:1 ratio) for knowledge panels
  - **Google displays this in search results** next to your site name
- **`sameAs`** - Other web profiles you own:
  - GitHub: `https://github.com/ramo4040/olyx-ui`
  - Twitter/X: `https://x.com/yassir_rouane`
  - Google uses these to connect your entity across platforms = stronger brand authority
- **`foundingDate: "2025"`** - Establishment date. Shows in knowledge panels and signals legitimacy.

**Why it matters:**

1. **Knowledge Graph:** Google builds a knowledge graph node for your org. Makes you discoverable via entity search ("Olyx UI organization").
2. **Logo in search:** Google shows your logo next to your search result = higher click-through rate (branded appearance = trust).
3. **Brand SERP:** Helps you own search results for your brand name. Google knows your official profiles vs. imposters.

**Note:** You need to add `/public/logo.png` (512x512) for the logo URL to work.

---

### SoftwareSourceCode Schema (Lines 38-59)

```tsx
const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  codeRepository: siteConfig.github,
  programmingLanguage: ["TypeScript", "React", "CSS"],
  runtimePlatform: "Node.js",
  license: "https://opensource.org/licenses/MIT",
  author: {
    "@type": "Person",
    name: siteConfig.creator,
    url: `https://x.com/${siteConfig.twitter.replace("@", "")}`,
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};
```

**What each line does for SEO:**

- **`@type: "SoftwareSourceCode"`** - This is open-source code/a library. Google has specific SERP features for software.
- **`name: "Olyx UI"`** - Software product name.
- **`description`** - What the software does. Key for appearing in "React component library" searches.
- **`url`** - Software homepage/documentation.
- **`codeRepository: "https://github.com/ramo4040/olyx-ui"`** - Link to GitHub repo:
  - Google uses this for software search results
  - Shows "View on GitHub" link in some results
  - Validates you're the official source (not a mirror/fork)
- **`programmingLanguage: ["TypeScript", "React", "CSS"]`** - Languages used:
  - Makes you discoverable for "TypeScript component library", "React UI library", etc.
  - Google's software search filters by language
- **`runtimePlatform: "Node.js"`** - Runtime environment. Helps target "Node.js libraries" searches.
- **`license: "https://opensource.org/licenses/MIT"`** - Open-source license URL:
  - Signals free/open-source status
  - Shows in Google's rich results for software
  - Builds trust (developers prefer MIT/Apache over proprietary)
- **`author`** - Who created it:
  - **`@type: "Person"`** - Individual creator (not an org)
  - **`name: "Yassir Rouane"`** - Your name. E-E-A-T signal (authorship).
  - **`url`** - Link to your profile. Google can connect your author entity to your content.
- **`offers`** - Pricing info:
  - **`price: "0"`** - Free to use
  - **`priceCurrency: "USD"`** - Currency (USD is standard for free open-source)
  - **Why include this?** Google shows price in software search results. "Free" is a huge conversion point.

**Why it matters:**

1. **Software-specific SERPs:** Google has specialized results for software (screenshot carousels, GitHub links, "Installation" sections). This schema makes you eligible.
2. **Discoverability:** Indexed by language/platform. Ranks for "React component library", "TypeScript UI library", etc.
3. **Installation intent:** Appears in searches like "React UI library free", "open source component library".

---

### FAQ Schema (Lines 61-107)

```tsx
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Olyx UI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Olyx UI is a modern component library built with React and TypeScript...",
      },
    },
    {
      "@type": "Question",
      name: "Is Olyx UI free to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Olyx UI is open-source and free to use...",
      },
    },
    {...}
  ],
};
```

**What each line does for SEO:**

- **`@type: "FAQPage"`** - This page contains frequently asked questions. Google shows these as expandable dropdowns in search results.
- **`mainEntity`** - Array of all Q&A pairs.
- **Each Question:**
  - **`@type: "Question"`** - Marks this as a question entity
  - **`name: "What is Olyx UI?"`** - The question text. Must match visible text on page to avoid penalty.
  - **`acceptedAnswer`** - The answer object:
    - **`@type: "Answer"`** - Marks this as an answer entity
    - **`text: "..."`** - The answer text. Must match visible text on page.

**Your 5 FAQs:**
1. "What is Olyx UI?" - Defines the product (brand + category keywords)
2. "Is Olyx UI free to use?" - Addresses cost concern (free = more CTR)
3. "How do I install Olyx UI?" - Targets installation queries ("how to install Olyx UI")
4. "Does Olyx UI support theming?" - Feature question (theme/customization is a common search)
5. "Which version of Tailwind is being used?" - Preemptive answer (you don't use Tailwind)

**Why it matters:**

1. **Rich results (gold mine):** Google shows FAQ rich results as expandable boxes in search:
   ```
   Your Site | https://olyxui.com
   Modern React Component Library...
   
   ▼ What is Olyx UI?
   ▼ Is Olyx UI free to use?
   ▼ How do I install Olyx UI?
   ```
   - Takes up 3x more SERP space
   - Higher CTR (10-30% boost)
   - Shows above organic results sometimes

2. **Voice search optimization:** Google Assistant/Siri read FAQ answers verbatim. Optimizing for "Is Olyx UI free?" captures voice searches.

3. **Featured snippets:** FAQ answers can become featured snippets (position zero). Gets you above #1 ranked page.

**Critical:** Your FAQ schema MUST match visible FAQ content on the page. Google penalizes mismatches. Your page.tsx already renders a `<Faq />` component, so ensure the text matches exactly.

---

### Schema Embedding (Lines 118-121)

```tsx
<JsonLd data={websiteSchema} />
<JsonLd data={organizationSchema} />
<JsonLd data={softwareSchema} />
<JsonLd data={faqSchema} />
```

**What this does:**

Injects 4 `<script type="application/ld+json">` tags into your homepage HTML:

```html
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"WebSite",...}
</script>
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"Organization",...}
</script>
...
```

**Why separate scripts?** Google recommends one schema type per script tag. Makes parsing easier for crawlers.

---

## 5. robots.ts - Crawl Rules

**File:** `/apps/web/src/app/robots.ts`

Generates `/robots.txt` - a file that tells search engine crawlers which parts of your site they can access.

```typescript
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/test/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
```

**Line-by-line SEO explanation:**

### Rules Section

- **`userAgent: "*"`** - Apply these rules to ALL crawlers:
  - `*` = wildcard for Googlebot, Bingbot, Baiduspider, etc.
  - You could specify `userAgent: "Googlebot"` for Google-only rules, but `*` is standard

- **`allow: "/"`** - Allow crawlers to access the root (/) and everything under it by default
  - This is the "open door" rule
  - Without this, some crawlers assume everything is blocked

- **`disallow: ["/api/", "/_next/", "/test/"]`** - Block these paths:
  
  **`/api/`** - Your API routes:
  - Why block? API endpoints return JSON, not HTML. Indexing them wastes crawl budget and creates useless search results.
  - Example: `/api/og/components/button` returns an image, not a page. Useless in search results.
  
  **`/_next/`** - Next.js internal files:
  - Why block? This folder contains JS/CSS build files, not content.
  - Indexing it wastes crawl budget on non-user-facing resources.
  - Example: `/_next/static/chunks/app-layout-abc123.js` is a JavaScript file, not a page.
  
  **`/test/`** - Test pages:
  - Why block? Test/staging pages shouldn't appear in search results.
  - They might have incomplete content, broken links, or experimental features.
  - Example: `/test/new-component` is a work-in-progress, not ready for users.

### Sitemap Declaration

- **`sitemap: "https://olyxui.com/sitemap.xml"`** - Tells crawlers where to find your XML sitemap:
  - Crawlers check robots.txt first, then follow the sitemap link
  - Ensures even new pages get discovered quickly (you add them to sitemap, crawler reads it)
  - Without this, Google might not find your sitemap for weeks

### Host Declaration

- **`host: "https://olyxui.com"`** - Declares your canonical domain:
  - If your site is accessible via multiple domains (olyxui.com, www.olyxui.com, olyx-ui.vercel.app), this tells crawlers which is "official"
  - Prevents duplicate content issues across domains
  - Note: Host directive is not officially supported by Google anymore, but Yandex/Bing still respect it

**Generated robots.txt output:**

```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /test/

Sitemap: https://olyxui.com/sitemap.xml
Host: https://olyxui.com
```

**Why robots.txt matters for SEO:**

1. **Crawl budget optimization:** Google has a limited "budget" for crawling your site. Block useless paths = more budget for important pages.
2. **No accidental indexing:** Prevents API routes, test pages, or build files from appearing in search results.
3. **Sitemap discovery:** Even if you submit sitemap via Search Console, having it in robots.txt ensures backup discovery.

**Common mistake:** Don't block `/api/og/` in robots.txt even though it's an API route, because OG images need to be crawlable by social media bots (Facebook, Twitter). But search engines don't need to index them, so blocking `/api/` is fine.

---

## 6. sitemap.ts - XML Sitemap

**File:** `/apps/web/src/app/sitemap.ts`

Generates `/sitemap.xml` - a file that lists all your site's URLs with priority and update frequency hints.

```typescript
export default function sitemap(): MetadataRoute.Sitemap {
  const docPages = source.getPages().map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: page.url.includes("/components/") ? 0.8 : 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/docs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...docPages,
  ];
}
```

**Line-by-line SEO explanation:**

### Dynamic Doc Pages (Lines 6-11)

```typescript
const docPages = source.getPages().map((page) => ({
  url: `${baseUrl}${page.url}`,
  lastModified: new Date(),
  changeFrequency: "weekly" as const,
  priority: page.url.includes("/components/") ? 0.8 : 0.7,
}));
```

- **`source.getPages()`** - Gets all pages from Fumadocs (your MDX docs system):
  - Returns ~60+ pages: all components, handbook pages, guides, etc.
  - This is dynamic: when you add a new component doc, sitemap auto-updates

- **`url: baseUrl + page.url`** - Full URL for each page:
  - Example: `https://olyxui.com/docs/components/button`
  - Must be absolute URLs (not relative `/docs/button`)

- **`lastModified: new Date()`** - When this page was last updated:
  - Using current date (`new Date()`) tells Google "check this page regularly"
  - For production, you'd ideally use actual file modification date: `new Date(page.file.mtimeMs)`
  - Google prioritizes recently updated pages in crawl queue

- **`changeFrequency: "weekly"`** - How often this page changes:
  - Possible values: `always`, `hourly`, `daily`, `weekly`, `monthly`, `yearly`, `never`
  - "weekly" = Google should re-crawl weekly to catch updates
  - **Important:** Google treats this as a hint, not a command. It's not a strict schedule.

- **`priority: page.url.includes("/components/") ? 0.8 : 0.7`** - Page importance:
  - Priority range: 0.0 to 1.0
  - **0.8 for component pages** (e.g., `/docs/components/button`) - These are your main content
  - **0.7 for other docs** (e.g., `/docs/handbook/installation`) - Secondary content
  - **Relative importance:** Priority is relative within your site, not across the web
  - Component pages get higher priority because they're likely your most valuable SEO targets

### Static Pages (Lines 13-26)

```typescript
return [
  {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    url: `${baseUrl}/docs`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  ...docPages,
];
```

- **Homepage (`priority: 1`):**
  - Highest priority (1.0 = most important page on your site)
  - Homepage is your domain authority anchor
  - Gets most backlinks → highest PageRank → deserves priority 1

- **Docs landing page (`priority: 0.9`):**
  - Second most important page
  - Entry point to all documentation
  - High traffic, high backlinks → priority 0.9

- **Component pages (`priority: 0.8`):**
  - Your primary content pages
  - Each component doc is a unique keyword target (e.g., "React Button component accessible")

- **Other docs (`priority: 0.7`):**
  - Supporting content (guides, handbook, resources)

**Generated sitemap.xml output:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://olyxui.com</loc>
    <lastmod>2026-02-15T10:30:00.000Z</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1</priority>
  </url>
  <url>
    <loc>https://olyxui.com/docs</loc>
    <lastmod>2026-02-15T10:30:00.000Z</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://olyxui.com/docs/components/button</loc>
    <lastmod>2026-02-15T10:30:00.000Z</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- ...60+ more pages -->
</urlset>
```

**Why sitemap.xml matters for SEO:**

1. **Guaranteed discovery:** Google finds pages even if they have no internal links (orphan pages).
2. **Faster indexing:** New pages get indexed in days instead of weeks.
3. **Priority hints:** Though Google ignores priority for ranking, it uses it for crawl frequency. High-priority pages get crawled more often.
4. **Large sites:** For sites with 1000+ pages, sitemaps ensure everything gets discovered (Google may not crawl deeply otherwise).

**How to submit:**
1. Go to Google Search Console: https://search.google.com/search-console
2. Click "Sitemaps" in left menu
3. Enter: `sitemap.xml`
4. Click "Submit"
5. Google will crawl it within 24-48 hours

**Pro tip:** Check sitemap in browser at `https://olyxui.com/sitemap.xml` before submitting to ensure it renders correctly.

---

## 7. /api/og - Dynamic Open Graph Images

**File:** `/apps/web/src/app/api/og/[...slug]/route.tsx`

Generates dynamic OG images for every documentation page. When someone shares `/docs/components/button`, Twitter/Facebook fetches `/api/og/components/button` and displays a custom image.

### Runtime & Function Signature (Lines 1-10)

```tsx
export const runtime = "edge";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string[] }> },
) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug ?? [];
```

**What it does for SEO:**

- **`export const runtime = "edge"`** - Runs on edge (CDN) instead of your main server:
  - OG images are fetched by Twitter/Facebook crawlers from worldwide locations
  - Edge runtime = image generated close to crawler (lower latency)
  - Faster image load = social platform doesn't timeout/skip your image

- **`async function GET(...)`** - API route handler:
  - Responds to GET requests to `/api/og/components/button`, `/api/og/handbook/installation`, etc.
  - Returns an image, not JSON

- **`params: Promise<{ slug: string[] }>`** - Catch-all route parameters:
  - URL `/api/og/components/button` → `slug = ["components", "button"]`
  - URL `/api/og/docs` → `slug = ["docs"]`
  - Dynamic generation: one route handles all 60+ doc pages

- **`slug ?? []`** - Fallback to empty array if no slug (shouldn't happen, but defensive coding)

### Title Extraction (Lines 12-19)

```tsx
const title =
  slug.length > 0
    ? slug[slug.length - 1]
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ")
    : "Documentation";
```

**What it does:**

Converts URL slug to title:
- Input: `["components", "button"]`
- Extracts last segment: `"button"`
- Splits by hyphens: `["button"]`
- Capitalizes each word: `["Button"]`
- Joins: `"Button"`

Examples:
- `/api/og/components/alert-dialog` → "Alert Dialog"
- `/api/og/handbook/getting-started` → "Getting Started"
- `/api/og/docs` → "Documentation"

**Why it matters:** OG image title must match page title. Mismatch = confused users = bounce.

### Section Badge (Lines 21-24)

```tsx
const section =
  slug.length > 1
    ? slug[0].charAt(0).toUpperCase() + slug[0].slice(1)
    : "Docs";
```

**What it does:**

Extracts first slug segment as section:
- `/api/og/components/button` → section = "Components"
- `/api/og/handbook/installation` → section = "Handbook"
- `/api/og/docs` → section = "Docs"

**Why it matters:** Section badge provides context. User sees "Components | Button" and knows this is a component doc, not a guide.

### Image Generation (Lines 26-82)

```tsx
return new ImageResponse(
  <div style={{
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    backgroundColor: "#09090b",
    padding: "80px",
    fontFamily: "sans-serif",
  }}>
```

**Design breakdown:**

- **1200x630px canvas** - OG image standard size
- **Dark background (#09090b)** - Matches site theme (consistent branding)
- **Flexbox layout** - Section badge + title + branding
- **Bottom-aligned content** - Modern design pattern (like hero sections)

```tsx
<div style={{ padding: "6px 14px", borderRadius: "6px", ... }}>
  {section}
</div>
```

**Section badge:**
- Small pill badge at top
- Shows "Components", "Handbook", or "Docs"
- Provides visual hierarchy (badge → title)

```tsx
<div style={{ fontSize: 64, fontWeight: 700, color: "#ffffff", ... }}>
  {title}
</div>
```

**Title (main text):**
- **64px font** - Large and readable in social feeds (mobile and desktop)
- **Bold (700 weight)** - Stands out in crowded social timelines
- **White text on dark bg** - High contrast = better readability
- **Negative letter spacing (-1.5px)** - Tighter, more professional look
- **maxWidth: 900px** - Prevents long titles from overflowing (e.g., "Advanced Theming Guide For Customization")

```tsx
<div style={{ fontSize: 24, color: "#71717a", marginTop: "20px" }}>
  Olyx UI
</div>
```

**Branding footer:**
- "Olyx UI" text at bottom
- Gray color (#71717a) - Subtle branding, doesn't compete with title
- Reinforces brand even when title is long

**Why this design matters for SEO:**

1. **CTR boost:** Professional OG images get 3-5x more clicks in social feeds:
   - Dark theme = modern, developer-friendly aesthetic
   - Clear hierarchy = scannable in 0.5 seconds
   - Branding = recognizable after first exposure

2. **Social signals:** More clicks from social → more traffic → positive ranking signal:
   - Google uses engagement metrics (time on site, bounce rate) as ranking factors
   - Users who click attractive OG images are more engaged

3. **Backlink potential:** Popular shares → blog mentions → backlinks:
   - Bloggers see your content in social feeds
   - Reference it in their posts
   - Link to your site

**Tools to test:**
- Twitter Card Validator: https://cards-dev.twitter.com/validator
- Facebook Debugger: https://developers.facebook.com/tools/debug/
- LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/

---

## 8. JsonLd Component - Reusable Structured Data

**File:** `/apps/web/src/components/seo/json-ld.tsx`

A utility component that safely embeds JSON-LD structured data in your pages.

```tsx
type JsonLdProps = {
  data: Record<string, unknown>;
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
```

**Line-by-line explanation:**

### Type Definition (Lines 1-3)

```tsx
type JsonLdProps = {
  data: Record<string, unknown>;
};
```

- **`Record<string, unknown>`** - TypeScript type for any JSON object:
  - Keys are strings (property names)
  - Values are unknown (any type: string, number, object, array)
  - This accepts `websiteSchema`, `organizationSchema`, `faqSchema`, etc.

### Script Tag (Lines 7-8)

```tsx
<script
  type="application/ld+json"
```

- **`<script type="application/ld+json">`** - Special script type for structured data:
  - Not JavaScript (won't execute)
  - Google/Bing parse this as JSON
  - Must be `application/ld+json` (other types like `text/javascript` won't work)

### Dangerous HTML Injection (Lines 9-11)

```tsx
dangerouslySetInnerHTML={{
  __html: JSON.stringify(data).replace(/</g, "\\u003c"),
}}
```

**What it does:**

- **`dangerouslySetInnerHTML`** - React prop for injecting raw HTML:
  - Normally React escapes HTML to prevent XSS attacks
  - `dangerouslySetInnerHTML` bypasses this (dangerous, hence the name)
  - Necessary here because we need raw JSON in the script tag

- **`JSON.stringify(data)`** - Converts JavaScript object to JSON string:
  - Input: `{ "@context": "https://schema.org", "@type": "WebSite", ... }`
  - Output: `'{"@context":"https://schema.org","@type":"WebSite",...}'`

- **`.replace(/</g, "\\u003c")`** - XSS protection:
  - Replaces all `<` characters with Unicode escape `\u003c`
  - Why? If your data contains `</script>`, it would break out of the script tag and allow code injection
  - Example attack vector:
    ```tsx
    const evilData = {
      "@type": "WebSite",
      "name": "</script><script>alert('hacked')</script>",
    };
    ```
  - Without `.replace()`, this renders:
    ```html
    <script type="application/ld+json">
    {"@type":"WebSite","name":"</script><script>alert('hacked')</script>"}
    </script>
    ```
  - Browser sees `</script>` and closes the JSON-LD script early, then executes the injected script
  - With `.replace()`, `<` becomes `\u003c`:
    ```html
    <script type="application/ld+json">
    {"@type":"WebSite","name":"\u003c/script>\u003cscript>alert('hacked')\u003c/script>"}
    </script>
    ```
  - Now it's safe: `\u003c` is just a Unicode character, not HTML

**Why this matters for SEO:**

1. **Security:** Prevents XSS attacks if user-generated content ever enters structured data (e.g., FAQs from a CMS).
2. **Schema validation:** Invalid JSON-LD breaks rich results. XSS prevention ensures valid output.
3. **Reusability:** This component wraps all JSON-LD, ensuring consistent security across all schemas.

**Usage examples:**

```tsx
<JsonLd data={websiteSchema} />
<JsonLd data={organizationSchema} />
<JsonLd data={faqSchema} />
```

Output:
```html
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"WebSite",...}
</script>
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"Organization",...}
</script>
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"FAQPage",...}
</script>
```

---

## Summary: How These Files Work Together

### Crawl → Index → Rank Flow

1. **Googlebot arrives at your site**
   - Checks `/robots.txt` (robots.ts) → sees sitemap reference
   - Reads `/sitemap.xml` (sitemap.ts) → finds all 60+ pages

2. **Googlebot crawls homepage (olyxui.com)**
   - Reads layout.tsx metadata (title, description, OG image)
   - Parses 4 JSON-LD schemas from page.tsx
   - Adds to Knowledge Graph: "Olyx UI = React component library"

3. **Social crawlers (Twitter/Facebook) visit**
   - Fetch `/opengraph-image` → display branded social card
   - Users click → traffic spike → positive ranking signal

4. **Googlebot crawls `/docs/components/button`**
   - Reads per-page metadata from docs/[[...slug]]/page.tsx
   - Parses breadcrumb JSON-LD
   - Indexes as "React Button component - Olyx UI"

5. **Google decides where to rank you**
   - Technical SEO: ✅ Fast, mobile-friendly, structured data
   - On-page SEO: ✅ Keyword-rich titles, descriptions, H1s
   - Off-page SEO: Social signals + backlinks from shares

---

## Next Steps After Implementation

### Immediate (Week 1)

1. **Submit sitemap to Search Console**
   - URL: https://search.google.com/search-console
   - Add property: `olyxui.com`
   - Submit sitemap: `https://olyxui.com/sitemap.xml`

2. **Validate structured data**
   - Rich Results Test: https://search.google.com/test/rich-results
   - Enter URL: `https://olyxui.com`
   - Check: All 4 schemas detected (WebSite, Organization, SoftwareSourceCode, FAQPage)

3. **Test social cards**
   - Twitter: https://cards-dev.twitter.com/validator
   - Facebook: https://developers.facebook.com/tools/debug/
   - Test: Homepage + 2-3 component pages

4. **Add missing assets**
   - Create `/public/logo.png` (512x512, square, transparent bg)
   - Update Organization schema logo URL

### Short-term (Month 1)

5. **Monitor Search Console**
   - Check "Coverage" report for indexing errors
   - Check "Enhancements" for rich result errors
   - Check "Performance" for keyword rankings

6. **Fix any schema errors**
   - Search Console → Enhancements → Structured Data
   - Fix any "Invalid" or "Warning" issues

7. **Track rankings**
   - Use Ahrefs, Semrush, or free Google Search Console
   - Monitor keywords: "React component library", "Base UI components", "accessible React components"

8. **Get backlinks**
   - Submit to component library directories (Awesome React, Awesome JavaScript)
   - Write guest posts on dev blogs (mention Olyx UI)
   - Share on Reddit (r/reactjs, r/webdev)

### Long-term (Months 2-6)

9. **Content expansion**
   - Add blog posts targeting keywords ("How to build accessible React forms")
   - Create comparison pages ("Olyx UI vs Material UI vs Chakra UI")
   - Write guides ("Migrating from Material UI to Olyx UI")

10. **Update content regularly**
    - Refresh guides every 3-6 months
    - Add new components → automatically added to sitemap
    - Update "last modified" dates in sitemap for updated pages

11. **Build authority**
    - Get featured on dev podcasts/newsletters
    - Sponsor open-source projects
    - Contribute to Base UI (your upstream dependency)

12. **Monitor competitors**
    - Track what keywords they rank for (Ahrefs Site Explorer)
    - Analyze their content (what topics they cover)
    - Create better content on same topics

---

## Validation Checklist

Before considering your SEO "done", validate:

### Technical SEO ✓

- [ ] `robots.txt` accessible at `/robots.txt` (blocks `/api/`, `/_next/`, `/test/`)
- [ ] `sitemap.xml` accessible at `/sitemap.xml` (lists all 60+ pages)
- [ ] `manifest.json` accessible at `/manifest.json` (PWA signals)
- [ ] HTTPS enabled (all requests redirect to https://)
- [ ] No mixed content warnings (all resources loaded via HTTPS)
- [ ] Canonical tags on every page (self-referencing)
- [ ] Mobile viewport meta tag present (width=device-width)
- [ ] Page speed < 3s (check PageSpeed Insights)

### On-Page SEO ✓

- [ ] Every page has unique title (50-60 chars)
- [ ] Every page has unique description (150-160 chars)
- [ ] One H1 per page (contains primary keyword)
- [ ] Heading hierarchy (H1 → H2 → H3, no skipping)
- [ ] Images have alt text (descriptive, keyword-rich)
- [ ] Internal links use descriptive anchor text (not "click here")
- [ ] URLs are readable (no query params, IDs, or special chars)

### Structured Data ✓

- [ ] WebSite schema on homepage
- [ ] Organization schema on homepage
- [ ] SoftwareSourceCode schema on homepage
- [ ] FAQPage schema on homepage (matches visible FAQs)
- [ ] BreadcrumbList schema on all docs pages
- [ ] No schema validation errors (test in Rich Results Test)

### Social/OG ✓

- [ ] OG image for homepage (1200x630)
- [ ] OG images for all docs pages (dynamic generation at `/api/og/`)
- [ ] Twitter card type set (`summary_large_image`)
- [ ] OG title, description, image present on all pages
- [ ] OG URLs are absolute (not relative)
- [ ] Images render correctly in Twitter Card Validator

### Search Console ✓

- [ ] Property verified in Google Search Console
- [ ] Sitemap submitted and no errors
- [ ] No indexing errors in Coverage report
- [ ] No mobile usability issues
- [ ] Core Web Vitals in "Good" range (LCP < 2.5s, INP < 200ms, CLS < 0.1)

---

## Measuring Success

### Metrics to Track

**Search Console (free, primary source):**
- Impressions (how many times you appear in search)
- Clicks (how many people click your result)
- Average position (ranking, lower = better)
- CTR (click-through rate, higher = better)

**Goals by Timeline:**
- **Week 1:** All pages indexed (check site:olyxui.com in Google)
- **Month 1:** Ranking for brand name ("Olyx UI") → position 1-3
- **Month 3:** Ranking for category + brand ("React component library Olyx UI") → position 1-5
- **Month 6:** Ranking for category alone ("React component library") → position 10-20
- **Month 12:** Ranking for category ("React component library") → position 1-10

**Realistic expectations:**
- New sites take 3-6 months to build domain authority
- Competitive keywords ("React components") take 6-12 months
- Long-tail keywords ("accessible React button component Base UI") rank faster (1-3 months)

---

## Troubleshooting

### Common Issues

**Problem: Pages not indexing**
- Check Search Console → Coverage → Excluded
- Causes: noindex tag, robots.txt block, redirect chains, duplicate content
- Fix: Remove noindex, check canonical tags, fix redirects

**Problem: Rich results not showing**
- Check Rich Results Test: https://search.google.com/test/rich-results
- Causes: Invalid JSON-LD, schema errors, mismatched visible content
- Fix: Validate schema, ensure FAQ text matches visible page content

**Problem: OG images not showing on Twitter**
- Check Twitter Card Validator: https://cards-dev.twitter.com/validator
- Causes: Wrong image size, missing OG tags, image too large (>5MB), image on restricted domain
- Fix: Ensure 1200x630, check `og:image` tag, compress image, test with absolute URL

**Problem: Low click-through rate (CTR)**
- Check Search Console → Performance → Queries
- Causes: Boring titles, missing descriptions, no rich results
- Fix: Rewrite titles with benefits ("50+ Accessible React Components - Free"), add FAQ schema for rich results

**Problem: High bounce rate**
- Check Google Analytics → Behavior → Landing Pages
- Causes: Slow page load, mobile unfriendly, misleading title/description
- Fix: Optimize images, fix viewport, ensure title matches content

---

## Tools Reference

### Free SEO Tools

- **Google Search Console** - Primary SEO monitoring (indexing, rankings, errors)
- **PageSpeed Insights** - Core Web Vitals and performance scores
- **Rich Results Test** - Validate structured data
- **Mobile-Friendly Test** - Check mobile optimization
- **Twitter Card Validator** - Test Twitter OG cards
- **Facebook Sharing Debugger** - Test Facebook OG cards
- **Schema Validator** - Validate JSON-LD syntax

### Paid SEO Tools (optional)

- **Ahrefs** ($99/mo) - Keyword research, backlink analysis, rank tracking
- **Semrush** ($99/mo) - Competitor analysis, keyword research
- **Screaming Frog** (Free up to 500 URLs) - Technical SEO audits

---

## Final Notes

This SEO implementation follows Google's official guidelines:

1. **Mobile-first:** Responsive design, viewport meta tag, fast mobile load
2. **E-E-A-T:** Authorship (creator name), expertise (structured data), trust (HTTPS)
3. **Page Experience:** Core Web Vitals, HTTPS, no intrusive interstitials
4. **Structured Data:** Schema.org vocabularies, valid JSON-LD
5. **Crawlability:** Clean URLs, sitemap, robots.txt, internal linking

**No black-hat tactics:**
- No keyword stuffing
- No hidden text
- No link schemes
- No content spam
- No cloaking

Everything here is white-hat, future-proof, and sustainable.

---

**Questions?** Test your implementation at:
- https://search.google.com/search-console (submit sitemap)
- https://search.google.com/test/rich-results (validate schemas)
- https://pagespeed.web.dev (check performance)

**Next step:** Deploy to production, then submit sitemap within 24 hours.
