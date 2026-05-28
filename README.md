# TOL Consulting LLC

A modern, mobile-first marketing website for TOL Consulting LLC, a business operations and technology consulting firm specializing in process optimization, workflow improvements, and CRM setup for small businesses.

## Features

- **Modern Next.js App Router** with TypeScript and Tailwind CSS
- **Mobile-first responsive design** optimized for all screen sizes
- **A2P 10DLC SMS Compliance** with proper opt-in forms and legal pages
- **SEO optimized** with metadata and OpenGraph tags
- **Accessible** with proper ARIA labels and keyboard navigation
- **Static site generation** for fast loading and excellent performance

## Pages

1. **Home (/)** - Hero section, service highlights, testimonials, and FAQ
2. **Services (/services)** - Detailed service offerings with icons
3. **About (/about)** - Mission, approach, and company values
4. **Contact (/contact)** - Contact form with SMS/email opt-in and business information
5. **Privacy Policy (/privacy)** - Complete privacy policy with SMS compliance language
6. **Terms of Service (/terms)** - Comprehensive terms including SMS messaging terms with anchor link

## A2P 10DLC Compliance

This website is designed with full A2P 10DLC compliance for SMS messaging:

- ✅ Clear business identification (name, address, phone, email) in footer
- ✅ SMS opt-in checkbox (unchecked by default) with explicit consent language
- ✅ Email opt-in checkbox (separate and optional)
- ✅ Phone number required only when SMS opt-in is checked
- ✅ Complete disclosure of message types, frequency, and rates
- ✅ STOP and HELP instructions prominently displayed
- ✅ Required privacy statement in Privacy Policy
- ✅ Links to legal pages near consent checkboxes
- ✅ "Consent is not a condition of purchase" statement
- ✅ Comprehensive SMS Terms & Consent page

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Configuration

Business information is centralized in `src/config/site.ts`:

- Business name
- Address
- Phone number (placeholder)
- Email (placeholder)
- Business hours
- Navigation links
- Legal page links

## Technology Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Static export ready

## Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout with Header/Footer
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   ├── about/page.tsx       # About page
│   ├── contact/page.tsx     # Contact page
│   ├── services/page.tsx    # Services page
│   ├── privacy/page.tsx     # Privacy Policy
│   └── terms/page.tsx       # Terms of Service (includes SMS terms)
├── components/
│   ├── Header.tsx           # Sticky navigation header
│   ├── Footer.tsx           # Footer with contact info and legal links
│   ├── ContactForm.tsx      # A2P compliant contact form
│   ├── ServiceCard.tsx      # Service display component
│   └── FAQ.tsx              # Accordion FAQ component
└── config/
    └── site.ts              # Centralized site configuration
```

## Compliance Notes

This website follows best practices for A2P 10DLC SMS compliance:

1. All required business information is clearly displayed
2. SMS opt-in uses explicit, affirmative consent
3. Legal pages include all required disclosures
4. No pre-checked opt-in boxes
5. Clear opt-out instructions (STOP to cancel)
6. Proper data handling and privacy disclosures

## License

Copyright © 2025 TOL Consulting LLC. All rights reserved.
