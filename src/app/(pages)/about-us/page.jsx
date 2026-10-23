import Hero from '@/components/About_hero'
import Intro from '@/components/About_intro'
import Vision from '@/components/About_vision'
import Ourservice from '@/components/Home_ourservices'
import Why_chooose from '@/components/Home_whychoose'
import About_howitWOrks from '@/components/About_howitWOrks'
import HappyCustomer from '@/components/Home_ensureHappy'
import { baseLocalBusinessSchema } from '@/utils/schemaMarkup'

const schema = baseLocalBusinessSchema;

export const metadata = {
  title: 'About Carbon Cabs: Our Mission to Provide Safe, Reliable & Affordable Taxi Service in Trivandrum. Learn About Our Professional Drivers & Commitment to Customer Satisfaction',
  description: "Discover the story behind Carbon Cabs and our mission to be Trivandrum's most trusted taxi service. Learn why customers choose us for our commitment to safety.",
  alternates: {
    canonical: 'https://carboncabs.com/about-us',
  },
  other: {
    'script:ld+json': JSON.stringify(schema),
  },
};


export default function About() {
  return (
    <>
      <Hero />
      <Intro />
      <Vision />
      <Ourservice />
      <About_howitWOrks />
      <Why_chooose />
      <HappyCustomer />
    </>
  )
}