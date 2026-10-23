// File: app/(pages)/airport-taxi/page.jsx

import Hero from '@/components/Technopark_taxi'
import Intro from '@/components/Technopart_intro'
import Why_choose from '@/components/Technopark_whychoose'
import Home_bookcabs from '@/components/Home_bookcabs'
import Technopark_pricing from '@/components/Technopark_pricesheet'
import Fleet from '@/components/Home_fleetOfCars'
import Ourservice from '@/components/Home_ourservices'
import Gallery from '@/components/Home_gallery'
import Faq from '@/components/Technopark_faq'
import TechnoparkTestimonials from '@/components/Technopark_testimonials'
import Technopark_it_services from '@/components/Technopart_services'


import { baseLocalBusinessSchema, technoparkSchema } from '@/utils/schemaMarkup'

const schemas = [
  baseLocalBusinessSchema,
  technoparkSchema
];

export const metadata = {
  title: 'Technopark Taxi Service 2026 | Cabs for IT Professionals',
  description: 'Premium 2026 taxi service for Technopark Trivandrum (Phase 1, 2, & 3). Exclusive corporate rates for UST, Infosys, and TCS employees. Reliable 24/7 airport drops and fixed monthly commutes. Book your professional ride now!',
  alternates: {
    canonical: 'https://carboncabs.com/technopark-taxi',
  },
  other: {
    'script:ld+json': JSON.stringify(schemas),
  },
};


export default function AirportTaxi() {
  return (
    <>
      <Hero />
      <Intro />
      <Fleet />
      <Home_bookcabs />
      <Technopark_it_services />  
      <Why_choose />
      <Technopark_pricing />
      <Ourservice />
      <TechnoparkTestimonials />
      <Gallery />
      <Faq />
    </>
  )
}
