import { GoogleAnalytics } from '@next/third-parties/google'
import { Inter } from 'next/font/google'
import "./globals.css";
import Nav from '@/components/layouts/Nav'
import Footer from '@/components/layouts/Footer'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  // Your existing title template
  title: {
    default: 'Best Taxi Service in Trivandrum | Carbon Cabs',
    template: '%s | Carbon Cabs',
  },
  // Your existing fallback description
  description: 'Book reliable taxi, cab, and rental services in Trivandrum with Carbon Cabs. 24/7 airport transfers, outstation rides, tempo traveller, Urbania, and group travel solutions.',

  // --- Add Open Graph and Twitter metadata below ---

  // Favicon (optional if you put favicon.ico in the app folder)
  icons: {
    icon: '/favicon.ico',
  },

  // Open Graph (for Facebook, LinkedIn, etc.)
  openGraph: {
    title: 'Carbon Cabs - Best Taxi, Cab & Rentals in Trivandrum',
    description: 'Book reliable taxi, cab, and rental services in Trivandrum with Carbon Cabs. 24/7 airport transfers, outstation rides, tempo traveller, Urbania, and group travel solutions.',
    url: 'https://carboncabs.com/',
    siteName: 'Carbon Cabs',
    images: [
      {
        url: 'https://carboncabs.com/logo.webp', // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Carbon Cabs - Best Taxi, Cab & Rentals in Trivandrum',
    description: 'Book reliable taxi, cab, and rental services in Trivandrum with Carbon Cabs. 24/7 airport transfers, outstation rides, tempo traveller, Urbania, and group travel solutions.',
    images: ['https://carboncabs.com/logo.webp'], // Must be an absolute URL
  },
};



export default function RootLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Carbon Cabs",
    "image": "https://carboncabs.com/logo.webp",
    "@id": "https://carboncabs.com/#organization",
    "url": "https://carboncabs.com/",
    "telephone": "+919895519435",
    "priceRange": "₹150 - ₹15000",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Trivandrum",
      "addressRegion": "Kerala",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 8.5581,
      "longitude": 76.8807
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "124"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Trivandrum Transportation Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Airport Taxi" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Call Taxi 24/7" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Technopark Corporate Cab" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Urbania & Tempo Rental" } }
      ]
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61578971378125",
      "https://www.instagram.com/CARBONCABS/"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className={inter.className}>
        <Nav />
        <main>{children}</main> {/* {children} will be your page content */}
        <Footer />
        <GoogleAnalytics gaId="G-HRVJ86EQNJ" />
      </body>
    </html>
  )
}
