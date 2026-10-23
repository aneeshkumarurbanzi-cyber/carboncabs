import Hero from '@/components/Tempo_hero'
import Bus_intro from '@/components/Bus_intro'
import Why_choose from '@/components/Tempo_whychoose'
import Fleet from '@/components/Bus_fleet'
import Gallery from '@/components/Home_gallery'
import Ourservice from '@/components/Home_ourservices'
import Testimonials from '@/components/Tempo_testimonials'
import Booking_section from '@/components/Home_bookcabs'
import Faq from '@/components/Bus_faq'
import Tempo_priceSheet from '@/components/Tempo_priceSheet'



import { baseLocalBusinessSchema, urbaniaTaxiSchema } from '@/utils/schemaMarkup'

const schemas = [
  baseLocalBusinessSchema,
  urbaniaTaxiSchema
];

export const metadata = {
  title: 'Force Urbania, Tempo Traveller & Bus Rent Trivandrum 2026',
  description: 'Rent Force Urbania, Tempo Traveller & AC Buses (12-50 seater) in Trivandrum 2026. Ideal for weddings, group tours & corporate outings. Best rates & safe drivers.',
  alternates: {
    canonical: 'https://carboncabs.com/trivandrum-tempo-traveller-urbania-rentals',
  },
  other: {
    'script:ld+json': JSON.stringify(schemas),
  },
}

export default function TempoTravelAndUrbaniaRental() {
  return (
    <>
      <Hero />
      <Bus_intro />
      <Why_choose />
      <Fleet />
      <Tempo_priceSheet />
      <Gallery />
      <Ourservice />
      <Testimonials />
      <Booking_section />
      <Faq />
    </>
  )
}