// File: app/(pages)/airport-taxi/page.jsx

import Hero from '@/components/Trivandrumtaxi_hero'
import Trivandrumtaxi_intro from '@/components/Trivandrum_taxi_intro'
import TrivandrumTaxi_features from '@/components/Taxi-Trivandrum-why-choose' 
import Home_bookcabs from '@/components/Home_bookcabs'  
import TrivandrumTaxi_priceChart from '@/components/Trivandrumtaxi_pricesheet'
import Fleet from '@/components/Home_fleetOfCars'
import Ourservice from '@/components/Home_ourservices'
import Gallery from '@/components/Home_gallery'
import Faq from '@/components/Taxitrivandrum_faq'
import Airport_testimonials from '@/components/Trivandrumtaxi_testimonials'
import TrivandrumTaxi_areas from '@/components/Trivandrumtaxi_areaswecover'


import { baseLocalBusinessSchema } from '@/utils/schemaMarkup'

const schema = baseLocalBusinessSchema;

export const metadata = {
  title: 'Best Taxi Service in Trivandrum 2026 | 24/7 Reliable Cabs',
  description: ' Looking for the best taxi service in Trivandrum? Carbon Cabs offers 24/7 city rides, outstation trips, and airport transfers at affordable rates. Book now!',
  alternates: {
    canonical: 'https://carboncabs.com/taxi-service-trivandrum',
  },
  other: {
    'script:ld+json': JSON.stringify(schema),
  },
};


export default function AirportTaxi() {
  return (
    <>
      <Hero />
      <Trivandrumtaxi_intro />
      <TrivandrumTaxi_features />
      <TrivandrumTaxi_priceChart />
      <Fleet />
      <Home_bookcabs />
      <TrivandrumTaxi_areas />
      <Ourservice />
      <Airport_testimonials />
      <Gallery />
      <Faq />
    </>
  )
}
