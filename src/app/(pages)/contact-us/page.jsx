import Hero from '@/components/Contact_hero'
import Intro from '@/components/Contact_into'
import Contact_TravelConfidence from '@/components/Contact_TravelConfidence'
import Service from '@/components/Contact_service'
import { baseLocalBusinessSchema } from '@/utils/schemaMarkup'

const schema = baseLocalBusinessSchema;

export const metadata = {
  title: 'Contact Carbon Cabs for 24/7 Taxi Service in Trivandrum. Call to Book Local City Rides, Airport Transfers, Tour Packages, or Get a Quick Quote for Any Trip',
  description: 'Need a taxi for a local ride, airport transfer, or tour? Contact Carbon Cabs 24/7 via phone or online for a fast quote and easy booking. Call us now!',
  alternates: {
    canonical: 'https://carboncabs.com/contact-us',
  },
  other: {
    'script:ld+json': JSON.stringify(schema),
  },
};


export default function Contact() {
  return (
    <>
      <Hero />
      <Intro />
      <Contact_TravelConfidence />
      <Service />
    </>
  )
}