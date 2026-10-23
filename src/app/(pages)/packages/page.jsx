import Hero from '@/components/Packages_hero'
import Intro from '@/components/Packages_intro'
import Packages_section from '@/components/Packages'
import Why_choose from '@/components/Home_whychoose'
import HappyCustomer from '@/components/Home_ensureHappy'
import { baseLocalBusinessSchema } from '@/utils/schemaMarkup'

const schema = baseLocalBusinessSchema;

export const metadata = {
  title: 'Kerala & South India Tour Packages from Trivandrum. Get Offer Prices for Trips to Munnar, Alleppey, Wayanad, Kanyakumari & Rameswaram | Carbon Cabs',
  description: 'Explore top-rated Kerala tour packages from Trivandrum. Enjoy safe, guided trips to Munnar, Alleppey, Wayanad & more with our expert drivers. Book your getaway today!',
  alternates: {
    canonical: 'https://carboncabs.com/packages',
  },
  other: {
    'script:ld+json': JSON.stringify(schema),
  },
};

export default function Packages() {
  return (
    <>
      <Hero />
      <Intro />
      <Packages_section />
      <Why_choose />
      <HappyCustomer />
    </>
  )
}