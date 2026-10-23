// File: app/(pages)/airport-taxi/page.jsx

import Hero from '@/components/Airport_hero'
import Intro from '@/components/Airport_intro'
import Airport_features from '@/components/Airport-features'
import Home_bookcabs from '@/components/Home_bookcabs'
import Airport_priceChart from '@/components/Airport_priceChart'
import Fleet from '@/components/Home_fleetOfCars'
import Ourservice from '@/components/Home_ourservices'
import Gallery from '@/components/Home_gallery'
import Faq from '@/components/Airport_faq.jsx'
import Airport_rideSmooth from '@/components/Airport_rideSmooth.jsx'
import Airport_testimonials from '@/components/Airport_testimonial'


import { baseLocalBusinessSchema, airportTaxiSchema } from '@/utils/schemaMarkup'

const schemas = [
  baseLocalBusinessSchema,
  airportTaxiSchema
];

export const metadata = {
  title: 'Airport Taxi Trivandrum 2026 | 24/7 Pickup & Drop Services',
  description: 'Need a Trivandrum airport taxi? Carbon Cabs offers 24/7 on-time pickups and drops with sanitized sedans, SUVs and Innova cars. Fast bookings and transparent rates.',
  alternates: {
    canonical: 'https://carboncabs.com/trivandrum-airport-taxi',
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
      <Airport_features />
      <Airport_priceChart />
      <Airport_rideSmooth />
      <Fleet />
      <Home_bookcabs />
      <Ourservice />
      <Airport_testimonials />
      <Gallery />
      <Faq />
    </>
  )
}
