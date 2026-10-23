import Hero from '@/components/Blog_hero'
import { baseLocalBusinessSchema } from '@/utils/schemaMarkup'

const schema = baseLocalBusinessSchema;

export const metadata = {
  title: 'Carbon Cabs Blog: Travel Tips, Local Guides & Taxi Service News for Trivandrum & Kerala. Stay Tuned for Updates & Articles',
  description: 'The official Carbon Cabs blog. Find travel tips, local insights, company news, and updates on taxi services in Trivandrum and Kerala. Coming soon!',
  alternates: {
    canonical: 'https://carboncabs.com/blogs',
  },
  other: {
    'script:ld+json': JSON.stringify(schema),
  },
};

export default function Blog() {
  return (
    <>
      {/* The main tag and background are best handled either in the layout 
          or here if specific to this page. Let's keep it simple. */}
      <Hero />
      {/* You can add more blog-specific components here, like a list of posts */}
    </>
  )
}