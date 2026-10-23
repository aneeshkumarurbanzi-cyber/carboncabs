import Hero from '@/components/Gallery_hero'
import { baseLocalBusinessSchema } from '@/utils/schemaMarkup'

const schema = baseLocalBusinessSchema;

export const metadata = {
  title: 'Carbon Cabs Gallery: View Photos of Our Well-Maintained Fleet, Including Innova, Sedans & Tempo Travellers, and See Happy Customer Trips Across Kerala',
  description: 'Explore our photo gallery to see our modern fleet of clean cars, buses, and Tempo Travellers in action. See the quality you can expect. View our gallery now!',
  alternates: {
    canonical: 'https://carboncabs.com/gallery',
  },
  other: {
    'script:ld+json': JSON.stringify(schema),
  },
}

export default function Gallery() {
  return (
    <>
      <Hero />
      {/* You can add more gallery-specific components here, like an image grid */}
    </>
  )
}