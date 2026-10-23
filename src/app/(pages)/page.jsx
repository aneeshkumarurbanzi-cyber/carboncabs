import Home_hero from '@/components/Home_hero'
import Home_about from '@/components/Home_about'
import Home_whychoose from '@/components/Home_whychoose'
import Home_bookcabs from '@/components/Home_bookcabs'
import Home_ourservices from '@/components/Home_ourservices'
import Home_ensureHappy from '@/components/Home_ensureHappy'
import Home_additionalService from '@/components/Home_additionalService'
import Home_faq from '@/components/Home_faq'
import Home_gallery from '@/components/Home_gallery'
import Testimonials from '@/components/Testimonials'
import Home_areasWeServe from '@/components/Home_areasWeServe'
import Home_fleetOfCars from '@/components/Home_fleetOfCars'
import { baseLocalBusinessSchema } from '@/utils/schemaMarkup'

const schema = baseLocalBusinessSchema;

export const metadata = {
  title: 'Premium Trivandrum Taxi & Rentals 2026',
  description: 'Carbon Cabs offers premium 24/7 taxi and vehicle rentals in Trivandrum. Enjoy safe, clean rides to Kovalam, East Fort, Technopark, airport transfers and more. Book now!',
  alternates: {
    canonical: 'https://carboncabs.com/',
  },
  other: {
    'script:ld+json': JSON.stringify(schema),
  },
};


export default function Home() {
  return (
    <>
      <Home_hero />
      <Home_about />
      <Home_whychoose />
      <Home_fleetOfCars />
      <Home_bookcabs />
      <Home_ourservices />
      <Home_areasWeServe />
      <Testimonials />
      <Home_gallery />
      <Home_ensureHappy />
      <Home_additionalService />
      <Home_faq />
    </>
  )
}