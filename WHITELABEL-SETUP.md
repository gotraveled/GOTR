# White Label Booking System Setup for GoTraveled

## Overview

This guide explains how to set up the white-label booking system so that users search on `gotraveled.com` and see results on `book.gotraveled.com` with your branding, while still earning affiliate commissions.

---

## Current Implementation

### 1. **Search Forms on Main Site** (`gotraveled.com`)
- Homepage has 4 search tabs: Flights, Hotels, Cars, Transfers
- Each tab has a custom search form
- When users submit search, they are redirected to `book.gotraveled.com`

### 2. **Booking Subdomain** (`book.gotraveled.com`)
- `/book/flights` - Flight search results
- `/book/hotels` - Hotel search results  
- `/book/cars` - Car rental results
- `/book/transfers` - Transfer booking results

---

## Vercel Domain Configuration

### Step 1: Add Both Domains in Vercel

1. Go to your Vercel project → **Settings** → **Domains**

2. Add these domains:
   - `gotraveled.com` (main site)
   - `www.gotraveled.com`
   - `book.gotraveled.com` (booking subdomain)

### Step 2: Configure DNS Records

In your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.):

```
Type   Name   Value                      TTL
A      @      76.76.21.21               Auto
CNAME  www    cname.vercel-dns.com      Auto
CNAME  book   cname.vercel-dns.com      Auto
```

**OR use Vercel's nameservers (Recommended):**
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

### Step 3: Wait for DNS Propagation
- Usually takes 5-10 minutes
- Can take up to 48 hours
- Check status: `dig book.gotraveled.com`

---

## Travelpayouts White Label Setup

### Required: White Label Access

To fully white-label (keep users on your domain during booking), you need:

1. **Apply for White Label access:**
   - Go to Travelpayouts dashboard
   - Navigate to **Tools** → **White Label**
   - Fill out application form
   - Wait for approval (usually 1-3 business days)

2. **Once approved, you'll get:**
   - Custom domain configuration
   - Iframe embedding permissions
   - API access for search results

### Current Hybrid Approach (Before White Label Approval)

The current implementation uses a hybrid approach:

**✅ What Works Now:**
- Users search on `gotraveled.com`
- Redirected to `book.gotraveled.com`
- See GoTraveled branding in header/footer
- Travelpayouts search widgets load on booking pages
- All affiliate tracking works (marker: 250882)

**⏳ What Needs White Label Approval:**
- Fully embedding search results without Travelpayouts branding
- Custom styling of booking widgets
- Direct API integration

---

## How It Currently Works

### 1. User Journey - Flights

1. User visits `gotraveled.com`
2. Fills out flight search form (origin, destination, dates)
3. Clicks "Search Flights"
4. Redirected to: `book.gotraveled.com/flights?origin=NYC&destination=LON&departure=2026-06-01&return=2026-06-10&passengers=2`
5. Booking page loads with:
   - GoTraveled header
   - Flight search results (Travelpayouts widget)
   - All clicks tracked with affiliate marker 250882

### 2. User Journey - Hotels

1. User searches hotel on homepage
2. Redirected to `book.gotraveled.com/hotels?city=Paris&checkIn=2026-06-01&checkOut=2026-06-05&guests=2`
3. Hotel search widget loads
4. Affiliate tracking active

### 3. User Journey - Cars

1. User searches car rental
2. Redirected to `book.gotraveled.com/cars?...`
3. Then redirects to DiscoverCars with affiliate link
4. User stays on DiscoverCars for booking (they handle white-label)

### 4. User Journey - Transfers

1. User searches transfer
2. Redirected to `book.gotraveled.com/transfers?...`
3. KiwiTaxi widget loads
4. Affiliate tracking active

---

## File Structure

```
/src
  /app
    /book
      /flights
        page.tsx          # Flight results page
      /hotels
        page.tsx          # Hotel results page
      /cars
        page.tsx          # Car rental redirect
      /transfers
        page.tsx          # Transfer results page
  /components
    /search
      FlightSearchForm.tsx    # Homepage flight form
      HotelSearchForm.tsx     # Homepage hotel form
      CarSearchForm.tsx       # Homepage car form
      TransferSearchForm.tsx  # Homepage transfer form
  /lib
    whitelabel.ts         # White label URL builders
```

---

## Affiliate Tracking Verification

### Check if Affiliate Links Work:

1. **Test Flight Search:**
   - Go to homepage
   - Search for flight
   - On booking page, check URL
   - Should contain: `marker=250882` or `shmarker=250882`

2. **Check in Browser DevTools:**
   ```javascript
   // Open console, check for Travelpayouts marker
   console.log(document.querySelectorAll('[src*="250882"]'));
   ```

3. **Verify in Travelpayouts Dashboard:**
   - Go to Travelpayouts → Statistics
   - Check for clicks and impressions
   - Verify marker 250882 is receiving traffic

---

## Improving White Label Experience

### Once You Have White Label Approval:

1. **Update booking pages** to use Travelpayouts API directly
2. **Style the results** with your branding
3. **Remove Travelpayouts branding** from widgets
4. **Add custom filtering** and sorting

### Example: Full White Label Flight Search

```typescript
// After white label approval, use Travelpayouts API:
const response = await fetch(
  `https://api.travelpayouts.com/v1/prices/cheap?origin=${origin}&destination=${destination}&token=${API_TOKEN}&marker=250882`
);

// Display results with your own design
// All bookings still tracked with your affiliate marker
```

---

## Testing Checklist

- [ ] Both domains resolve (gotraveled.com, book.gotraveled.com)
- [ ] Homepage search forms work
- [ ] Flight search redirects to booking subdomain
- [ ] Hotel search redirects to booking subdomain
- [ ] Car search redirects properly
- [ ] Transfer search redirects properly
- [ ] Widgets load on booking pages
- [ ] Affiliate marker (250882) present in all links
- [ ] SSL certificates active on both domains
- [ ] Mobile responsive on all pages
- [ ] Header/footer show on booking pages

---

## Troubleshooting

### Issue: "book.gotraveled.com" shows 404

**Solution:**
- Check DNS records are correct
- Wait for DNS propagation (up to 48 hours)
- Verify domain is added in Vercel

### Issue: Widgets not loading on booking pages

**Solution:**
- Check browser console for errors
- Disable ad blockers
- Verify environment variables are set in Vercel
- Check CSP headers in next.config.js

### Issue: Affiliate marker not showing

**Solution:**
- Verify TRAVELPAYOUTS_MARKER=250882 in Vercel env vars
- Check whitelabel.ts configuration
- Inspect widget URLs in DevTools

### Issue: Redirects not working

**Solution:**
- Check search form `handleSubmit` functions
- Verify NEXT_PUBLIC_BOOKING_URL is set
- Test in incognito mode

---

## Next Steps After White Label Approval

1. **Apply for white label** in Travelpayouts dashboard
2. **Wait for approval** (1-3 business days)
3. **Implement Travelpayouts API** for direct data access
4. **Custom design** booking results pages
5. **Add advanced features:**
   - Price alerts
   - Fare calendars
   - Price comparison
   - User accounts
   - Booking history

---

## Support

- **Travelpayouts Support:** https://support.travelpayouts.com
- **White Label Documentation:** https://support.travelpayouts.com/hc/en-us/articles/360010489313

---

## Summary

✅ **Current Setup (Working Now):**
- Search on main domain
- Results on booking subdomain
- Affiliate tracking active
- GoTraveled branding present

🔄 **Future Enhancement (After White Label Approval):**
- Fully custom booking experience
- No external branding
- API-driven results
- Advanced features

Your current setup is fully functional and earning commissions. White label approval will just enhance the user experience!
