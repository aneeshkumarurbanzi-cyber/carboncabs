// Base LocalBusiness Schema for Carbon Cabs
export const baseLocalBusinessSchema = {
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
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61578971378125",
    "https://www.instagram.com/CARBONCABS/"
  ]
};

// Specific service schemas
export const airportTaxiSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Airport Taxi Service",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Carbon Cabs",
    "url": "https://carboncabs.com/"
  },
  "areaServed": "TRV Airport, Trivandrum",
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://carboncabs.com/trivandrum-airport-taxi"
  }
};

export const callTaxiSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Call Taxi 24/7",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Carbon Cabs",
    "url": "https://carboncabs.com/"
  },
  "areaServed": "Trivandrum",
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://carboncabs.com/call-taxi-trivandrum",
    "servicePhone": "+919895519435"
  }
};

export const technoparkSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Technopark Corporate Cab",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Carbon Cabs",
    "url": "https://carboncabs.com/"
  },
  "areaServed": "Technopark, Trivandrum",
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://carboncabs.com/technopark-taxi"
  }
};

export const urbaniaTaxiSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Urbania & Tempo Traveller Rental",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Carbon Cabs",
    "url": "https://carboncabs.com/"
  },
  "areaServed": "Trivandrum",
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://carboncabs.com/trivandrum-tempo-traveller-urbania-rentals"
  }
};

export const kochiTourSchema = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "name": "Kochi Taxi Tour Packages",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Carbon Cabs",
    "url": "https://carboncabs.com/"
  },
  "url": "https://carboncabs.com/kochi-taxi-tour-packages"
};
