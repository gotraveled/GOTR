/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Professional blue color scheme based on Material Design
        primary: '#1976D2',      // Material Blue 700 - Main brand color
        secondary: '#42A5F5',    // Material Blue 400 - Lighter accent
        accent: '#0D47A1',       // Material Blue 900 - Dark accent
        success: '#4CAF50',      // Green for success states
        warning: '#FF9800',      // Orange for warnings
        info: '#03A9F4',         // Light blue for info
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #1976D2 0%, #42A5F5 100%)',
        'gradient-accent': 'linear-gradient(135deg, #0D47A1 0%, #1976D2 100%)',
      },
    },
  },
  plugins: [],
};
