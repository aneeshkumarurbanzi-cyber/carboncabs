// File: app/(pages)/airport-taxi/page.jsx

import Hero from '@/components/Calltaxi_hero'
import Intro from '@/components/Calltaxi_intro'
import CallTaxi_features from '@/components/Calltaxi_features'
import Home_bookcabs from '@/components/Home_bookcabs'
import CallTaxi_priceChart from '@/components/Calltaxi_fares'
import Fleet from '@/components/Home_fleetOfCars'
import Ourservice from '@/components/Home_ourservices'
import Gallery from '@/components/Home_gallery'
import Faq from '@/components/Calltaxi_faq'
import CallTaxiTestimonials from '@/components/Calltaxi_testimonials'
import Fastpickup from '@/components/Calltaxi_fastpickup'


import { baseLocalBusinessSchema, callTaxiSchema } from '@/utils/schemaMarkup'

const schemas = [
  baseLocalBusinessSchema,
  callTaxiSchema
];

export const metadata = {
  title: 'Call Taxi Trivandrum | 24/7 Fast Pickup & Drop',
  description: 'Need a cab right now in Trivandrum? Call Carbon Cabs for the fastest call taxi service. 15-minute pickup across the city, day or night. Emergency hospital transfers available',
  alternates: {
    canonical: 'https://carboncabs.com/call-taxi-trivandrum',
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
      <Fastpickup />
      <CallTaxi_features />
      <CallTaxi_priceChart />
      <Ourservice />
      <CallTaxiTestimonials />
      <Gallery />
      <Faq />
    </>
  )
}
