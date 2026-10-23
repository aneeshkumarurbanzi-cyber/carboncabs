

import Hero from "@/components/Kochi_hero";
import Kochi_whychoose from "@/components/Kochi_whychoose";
import Kochi_fleet from "@/components/kochi_fleet";
import Testimonials from "@/components/Testimonials";
import Booking from "@/components/Home_bookcabs";
import Kochi_packages from "@/components/Kochi_packages";
import Additonal_pages from '@/components/Home_additionalService'
import Faq from "@/components/Kochi_faq";


import { baseLocalBusinessSchema, kochiTourSchema } from '@/utils/schemaMarkup'

const schemas = [
  baseLocalBusinessSchema,
  kochiTourSchema
];

export const metadata = {
  title: 'Kochi Taxi Tour Packages for Munnar, Alleppey, Thekkady & Fort Kochi. Get Custom Sightseeing Plans with Expert Drivers & Transparent Pricing | Carbon Cabs',
  description: 'Explore top-rated taxi tour packages from Kochi to Munnar, Alleppey, and beyond. Enjoy clean cars, professional local drivers, and custom itineraries. Book your Kerala trip now!',
  alternates: {
    canonical: 'https://carboncabs.com/kochi-taxi-tour-packages',
  },
  other: {
    'script:ld+json': JSON.stringify(schemas),
  },
};

export default function KochiPage() {
  return (
    <>
      <Hero />
      <Kochi_whychoose />
      <Kochi_packages />
      <Kochi_fleet />
      <Booking />
      <Testimonials />
      <Additonal_pages />
      <Faq />
    </>
  );
}
