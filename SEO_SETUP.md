# SEO & Google Analytics Setup Guide

This document outlines the SEO optimizations and Google Analytics setup for your portfolio.

## 🎯 Google Analytics Setup

### Step 1: Create a Google Analytics 4 Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new GA4 property for your website
3. Get your **Measurement ID** (format: `G-XXXXXXXXXX`)

### Step 2: Configure Your Measurement ID

Replace `G-XXXXXXXXXX` in the following files with your actual Measurement ID:

1. **`index.html`** (lines 67, 72)
2. **`src/utils/analytics.ts`** (line 17)

### Step 3: Verify Installation

1. Run your site locally or in production
2. Go to Google Analytics > Reports > Realtime
3. Navigate your site and confirm events are being tracked

## 📊 Analytics Features Implemented

### Automatic Tracking
- **Page views**: Automatically tracked on app load
- **Initial visit**: Tracked via `usePageTracking()` hook

### Custom Event Tracking
Available functions in `src/utils/analytics.ts`:

```typescript
import { trackProjectClick, trackSectionView, trackExternalLink } from './utils/analytics';

// Track project clicks
trackProjectClick('TSP Genetic Algorithm');

// Track section views
trackSectionView('About');

// Track external links
trackExternalLink('https://github.com/ezrahuffman', 'GitHub Profile');
```

### Usage Example

To track a button click in your components:

```tsx
import { trackProjectClick } from '../utils/analytics';

const handleClick = () => {
  trackProjectClick('Project Name');
  // ... rest of your logic
};
```

## 🔍 SEO Optimizations Implemented

### 1. Meta Tags
- ✅ **Title Tag**: Optimized with keywords
- ✅ **Description**: Compelling 160-character description
- ✅ **Keywords**: Relevant technical keywords
- ✅ **Author**: Your name
- ✅ **Robots**: Tells search engines to index and follow
- ✅ **Canonical URL**: Prevents duplicate content issues

### 2. Open Graph (Social Media)
- ✅ **Facebook/LinkedIn**: Rich preview cards when shared
- ✅ **Twitter Cards**: Optimized Twitter sharing
- ✅ **OG Image**: Need to create `public/assets/og-image.png` (1200x630px recommended)

### 3. Structured Data (Schema.org)
- ✅ **JSON-LD**: Person schema with job info
- ✅ **Knowledge Graph**: Helps Google understand your profile
- ✅ **Social Links**: GitHub, LinkedIn references

### 4. Technical SEO
- ✅ **`robots.txt`**: Guides search engine crawlers
- ✅ **`sitemap.xml`**: Lists all important pages
- ✅ **Semantic HTML**: Using proper HTML5 elements
- ✅ **Mobile Responsive**: Already handled by Tailwind

## 📝 To-Do Items

### Required Actions

1. **Replace Google Analytics ID**
   - Update `G-XXXXXXXXXX` with your real Measurement ID in:
     - `index.html` (2 places)
     - `src/utils/analytics.ts` (1 place)

2. **Update Domain References**
   - Replace `https://ezrahuffman.com` with your actual domain in:
     - `index.html` (meta tags)
     - `public/sitemap.xml` (all URLs)
     - `public/robots.txt` (sitemap URL)

3. **Create Open Graph Image**
   - Create an image at `public/assets/og-image.png`
   - Recommended size: **1200 x 630 pixels**
   - Should include your name, title, and a visual element
   - Use tools like [Canva](https://www.canva.com/) or [Figma](https://www.figma.com/)

4. **Update Social Links**
   - In `index.html`, update the structured data section (lines 40-43) with your actual:
     - GitHub URL
     - LinkedIn URL
     - Any other professional profiles

5. **Submit to Search Engines**
   - [Google Search Console](https://search.google.com/search-console): Submit sitemap
   - [Bing Webmaster Tools](https://www.bing.com/webmasters): Submit sitemap
   - Verify ownership using DNS or HTML file method

### Optional Enhancements

1. **Performance Optimization**
   - Add lazy loading for images
   - Implement code splitting if bundle gets large
   - Use Lighthouse to check performance score

2. **Additional Tracking**
   - Add event tracking to project links
   - Track navigation clicks
   - Track time spent on sections

3. **Content Optimization**
   - Add blog posts (great for SEO)
   - Include testimonials or recommendations
   - Add detailed project case studies

4. **Local SEO** (if applicable)
   - Add address schema
   - Create Google Business Profile

## 🧪 Testing & Validation

### Test Your SEO

1. **Meta Tags**
   - [Meta Tags](https://metatags.io/): Visual preview of all meta tags
   - View page source and verify all tags are present

2. **Structured Data**
   - [Google Rich Results Test](https://search.google.com/test/rich-results)
   - [Schema Markup Validator](https://validator.schema.org/)

3. **Performance**
   - [Google PageSpeed Insights](https://pagespeed.web.dev/)
   - [GTmetrix](https://gtmetrix.com/)

4. **Mobile Friendly**
   - [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

5. **Social Preview**
   - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)

## 📈 Monitoring

### Google Search Console
- Monitor search performance
- Check indexing status
- View search queries
- Identify crawl errors

### Google Analytics
- Track visitor behavior
- Monitor traffic sources
- Analyze user demographics
- Set up conversion goals

## 🎨 Best Practices

1. **Keep Content Fresh**: Update your portfolio regularly
2. **Add Alt Text**: Ensure all images have descriptive alt attributes
3. **Use Descriptive URLs**: Keep URLs clean and readable
4. **Internal Linking**: Link between different sections when relevant
5. **Mobile First**: Always test on mobile devices
6. **Page Speed**: Keep load times under 3 seconds
7. **HTTPS**: Always use SSL certificate (required for modern browsers)

## 📚 Resources

- [Google Analytics Documentation](https://support.google.com/analytics)
- [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Schema.org Documentation](https://schema.org/docs/documents.html)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
