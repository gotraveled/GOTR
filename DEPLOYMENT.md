# GoTraveled Deployment Guide

## 🚀 Quick Start - Deploy to Vercel

### Option 1: One-Click Deploy (Recommended)

1. **Push to GitHub** (Already done ✅)

2. **Connect to Vercel:**
   - Go to [https://vercel.com/new](https://vercel.com/new)
   - Click "Import Git Repository"
   - Select your GitHub repository: `gotraveled/GOTR`
   - Click "Import"

3. **Configure Project:**
   Vercel will auto-detect Next.js. Just confirm:
   - Framework Preset: **Next.js**
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

4. **Add Environment Variables:**
   Click "Environment Variables" and add:
   ```
   TRAVELPAYOUTS_PROJECT_ID = 17835
   TRAVELPAYOUTS_API_TOKEN = 44ce7a2e2d88339ec9004b468ca801e9
   TRAVELPAYOUTS_MARKER = 250882
   NEXT_PUBLIC_SITE_URL = https://gotraveled.com
   NEXT_PUBLIC_BOOKING_URL = https://book.gotraveled.com
   ```

5. **Deploy:**
   - Click "Deploy"
   - Vercel will build and deploy your site
   - You'll get a preview URL like: `gotraveled.vercel.app`

### Option 2: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod

# Follow the prompts
```

## 🌐 Custom Domain Setup

### Add Domains in Vercel

1. Go to Project Settings → Domains
2. Add your domains:
   - `gotraveled.com`
   - `www.gotraveled.com`
   - `book.gotraveled.com`

### Configure DNS Records

In your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.):

```
Type   Name   Value                      TTL
A      @      76.76.21.21               Auto
CNAME  www    cname.vercel-dns.com      Auto
CNAME  book   cname.vercel-dns.com      Auto
```

**Or use Vercel Nameservers (Recommended):**
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

### SSL Certificate
- Vercel automatically provisions SSL certificates
- HTTPS will be enabled within minutes
- No additional configuration needed

## 🔧 Build & Test Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# Open http://localhost:3000

# Build for production
npm run build

# Test production build locally
npm run start
# Open http://localhost:3000
```

## 📊 Performance Optimization

### Vercel Auto-Optimizations
- ✅ Edge Network CDN
- ✅ Automatic code splitting
- ✅ Image optimization
- ✅ Caching strategies
- ✅ Gzip/Brotli compression

### Expected Lighthouse Scores
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## 🔐 Security Headers (Auto-configured by Vercel)

```javascript
// next.config.js includes:
- X-DNS-Prefetch-Control
- Strict-Transport-Security
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy
```

## 📈 Post-Deployment Checklist

### Immediate (Day 1)
- [ ] Verify all pages load correctly
- [ ] Test all Travelpayouts widgets
- [ ] Confirm affiliate tracking works
- [ ] Check mobile responsiveness
- [ ] Test contact form
- [ ] Verify SSL certificate

### Week 1
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics
- [ ] Configure Google Tag Manager
- [ ] Add Facebook Pixel (optional)
- [ ] Test booking flow end-to-end

### Month 1
- [ ] Monitor affiliate conversions
- [ ] Add more destination guides
- [ ] Expand blog content
- [ ] Set up email newsletter (Mailchimp/SendGrid)
- [ ] Configure automated backups

## 🛠️ Maintenance

### Update Content
```bash
# Edit files locally
npm run dev
# Test changes
# Commit and push
git add .
git commit -m "Update content"
git push origin main
# Vercel auto-deploys
```

### Monitor Performance
- Vercel Analytics (built-in)
- Google Search Console
- Google Analytics
- Travelpayouts Dashboard

## 🆘 Troubleshooting

### Build Fails
```bash
# Check build locally
npm run build

# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Widgets Not Loading
- Check browser console for errors
- Verify Travelpayouts script URLs
- Confirm affiliate marker in URLs
- Test in incognito mode (ad blockers)

### Domain Not Working
- Wait 24-48 hours for DNS propagation
- Verify DNS records with: `dig gotraveled.com`
- Check Vercel domain settings
- Clear browser cache

## 📞 Support Resources

- **Vercel Documentation:** https://vercel.com/docs
- **Next.js Documentation:** https://nextjs.org/docs
- **Travelpayouts Support:** https://support.travelpayouts.com
- **GitHub Issues:** https://github.com/gotraveled/GOTR/issues

## 🎯 Success Metrics

Track these KPIs after deployment:
- Daily/Monthly Active Users
- Affiliate Click-Through Rate
- Conversion Rate
- Average Session Duration
- Pages Per Session
- Bounce Rate
- Affiliate Revenue

## 🔄 Continuous Deployment

Every push to `main` branch automatically:
1. Triggers Vercel build
2. Runs tests and linting
3. Builds production bundle
4. Deploys to production
5. Updates all domains

**Deployment time:** ~2-3 minutes

---

## ✅ You're Ready!

Your GoTraveled website is production-ready and can be deployed in under 10 minutes. The infrastructure is scalable, performant, and optimized for affiliate revenue generation.

**Happy Traveling! ✈️**
