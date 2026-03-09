# GoTraveled - Travel Affiliate Website

A complete production-ready travel affiliate website built with Next.js 14, integrating Travelpayouts affiliate services for flights, hotels, car rentals, and airport transfers.

## 🌐 Live Websites

- **Main Website:** https://gotraveled.com
- **Booking Subdomain:** https://book.gotraveled.com (White Label)

## 🚀 Features

- **Flight Search & Booking** - Powered by Aviasales
- **Hotel Search & Booking** - Multi-provider hotel search
- **Car Rentals** - Integrated with DiscoverCars
- **Airport Transfers** - KiwiTaxi integration
- **Tours & Activities** - Curated experiences worldwide
- **Destination Guides** - SEO-optimized travel content
- **Travel Blog** - Articles and tips
- **Responsive Design** - Mobile-first approach
- **SEO Optimized** - Meta tags, sitemap, robots.txt
- **Fast Performance** - Optimized for Lighthouse score 90+

## 📋 Technology Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Icons:** React Icons
- **Animation:** Framer Motion
- **HTTP Client:** Axios
- **SEO:** next-seo
- **Deployment:** Vercel

## 🔑 Travelpayouts Integration

### Account Details

- **Project ID:** 17835
- **API Token:** 44ce7a2e2d88339ec9004b468ca801e9
- **Affiliate Marker:** 250882

### Connected Programs

- Aviasales (Flights)
- DiscoverCars (Car Rentals)
- KiwiTaxi (Airport Transfers)

## 📁 Project Structure

```
/root/GOTR
├── src/
│   ├── app/
│   │   ├── about/
│   │   ├── affiliate-disclosure/
│   │   ├── blog/
│   │   ├── cars/
│   │   ├── contact/
│   │   ├── destinations/
│   │   │   ├── dubai/
│   │   │   └── page.tsx
│   │   ├── flights/
│   │   ├── hotels/
│   │   ├── privacy/
│   │   ├── tours/
│   │   ├── transfers/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   └── components/
│       ├── widgets/
│       │   ├── CarWidget.tsx
│       │   ├── FlightDealsWidget.tsx
│       │   ├── FlightSearchWidget.tsx
│       │   ├── HotelWidget.tsx
│       │   ├── TaxiWidget.tsx
│       │   ├── TransferBookingWidget.tsx
│       │   └── TransferReviewsWidget.tsx
│       ├── BlogSection.tsx
│       ├── Footer.tsx
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── Newsletter.tsx
│       └── PopularDestinations.tsx
├── public/
├── .env.local
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git

### Local Development

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd GOTR
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   
   The `.env.local` file is already configured with Travelpayouts credentials:
   ```
   TRAVELPAYOUTS_PROJECT_ID=17835
   TRAVELPAYOUTS_API_TOKEN=44ce7a2e2d88339ec9004b468ca801e9
   TRAVELPAYOUTS_MARKER=250882
   NEXT_PUBLIC_SITE_URL=https://gotraveled.com
   NEXT_PUBLIC_BOOKING_URL=https://book.gotraveled.com
   ```

4. **Run development server:**
   ```bash
   npm run dev
   ```

5. **Open browser:**
   Navigate to `http://localhost:3000`

## 🚀 Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard

1. **Push code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import to Vercel:**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Configure Environment Variables:**
   In Vercel project settings, add:
   - `TRAVELPAYOUTS_PROJECT_ID` = `17835`
   - `TRAVELPAYOUTS_API_TOKEN` = `44ce7a2e2d88339ec9004b468ca801e9`
   - `TRAVELPAYOUTS_MARKER` = `250882`
   - `NEXT_PUBLIC_SITE_URL` = `https://gotraveled.com`
   - `NEXT_PUBLIC_BOOKING_URL` = `https://book.gotraveled.com`

4. **Deploy:**
   Click "Deploy" and Vercel will build and deploy your site

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel --prod
   ```

4. **Follow prompts to configure your project**

### Custom Domain Setup

1. **In Vercel Dashboard:**
   - Go to Project Settings → Domains
   - Add your custom domains:
     - `gotraveled.com`
     - `www.gotraveled.com`
     - `book.gotraveled.com`

2. **Configure DNS:**
   Add these records in your domain registrar:
   ```
   Type  Name    Value
   A     @       76.76.21.21
   CNAME www     cname.vercel-dns.com
   CNAME book    cname.vercel-dns.com
   ```

3. **SSL Certificate:**
   Vercel automatically provisions SSL certificates

## 🔧 Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

## 📊 SEO Features

- ✅ Meta tags on all pages
- ✅ Open Graph tags for social sharing
- ✅ Structured data markup
- ✅ Dynamic sitemap generation
- ✅ Robots.txt configuration
- ✅ Semantic HTML structure
- ✅ Image optimization with Next.js Image
- ✅ Mobile-responsive design
- ✅ Fast page load times

## 🎨 Design System

### Colors

- **Primary:** #0085FF
- **Secondary:** #0C73FE
- **Accent:** #32a8dd

### Typography

- **Font Family:** Inter (Google Fonts)
- **Headings:** Bold, 24px-48px
- **Body:** Regular, 16px-18px

### Components

- Reusable card components
- Custom button styles
- Input field designs
- Navigation components
- Widget containers

## 📱 Pages Overview

### Main Pages

1. **Homepage** (`/`) - Hero search, popular destinations, deals widgets
2. **Flights** (`/flights`) - Flight search, deals, tips
3. **Hotels** (`/hotels`) - Hotel search, categories, tips
4. **Cars** (`/cars`) - Car rental search, companies, tips
5. **Transfers** (`/transfers`) - Airport transfer booking
6. **Tours** (`/tours`) - Activities and experiences
7. **Destinations** (`/destinations`) - Destination listings
8. **Blog** (`/blog`) - Travel articles and guides

### Destination Pages

- Dubai (`/destinations/dubai`)
- Bali, Paris, Thailand, Tokyo (structure ready)

### Utility Pages

- About (`/about`)
- Contact (`/contact`)
- Privacy Policy (`/privacy`)
- Affiliate Disclosure (`/affiliate-disclosure`)

## 🔌 Widget Integration

All Travelpayouts widgets are integrated as React components with proper script loading:

1. **FlightSearchWidget** - Main flight search form
2. **FlightDealsWidget** - Displays cheap flight deals
3. **HotelWidget** - Hotel search functionality
4. **TaxiWidget** - Transfer search form
5. **TransferBookingWidget** - Transfer options display
6. **TransferReviewsWidget** - Customer reviews
7. **CarWidget** - DiscoverCars affiliate link

## 📈 Performance Optimization

- Next.js Image component for optimized images
- Lazy loading of widgets
- Code splitting with dynamic imports
- Minimized CSS and JavaScript
- CDN delivery via Vercel Edge Network
- Caching strategies

## 🔐 Security

- Environment variables for sensitive data
- HTTPS enforcement
- Secure headers configuration
- XSS protection
- CSRF protection

## 📞 Support

For questions or issues:
- Email: support@gotraveled.com
- Website: https://gotraveled.com/contact

## 📄 License

This project is proprietary and confidential.

## 🙏 Credits

- **Travelpayouts** - Affiliate platform provider
- **Next.js** - React framework
- **Vercel** - Hosting and deployment
- **Unsplash** - Stock images

---

**Built with ❤️ for travelers worldwide**
