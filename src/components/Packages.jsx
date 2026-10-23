'use client';
import Image from 'next/image';
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const packages = [
  {
    title: "Munnar",
    description: "Munnar is one of Kerala’s most popular hill stations, located at an altitude of 1,600 meters above sea level. Surrounded by rolling tea gardens, misty valleys, and breathtaking waterfalls, Munnar offers a peaceful escape from the city. Key attractions include Eravikulam National Park, Mattupetty Dam, and Tea Museum. Perfect for honeymooners, trekkers, and photography lovers, Munnar is a must-visit for anyone who wants to experience the cool charm of the Western Ghats.",
    image: '/assets/munnar.webp',
    alt: "Munnar"
  },
  {
    title: "Alleppey (Alappuzha)",
    description: "Known as the “Venice of the East,” Alleppey is famous for its network of peaceful backwaters, houseboat cruises, and scenic lakeside views. A ride through the Vembanad Lake in a traditional houseboat offers an unforgettable glimpse into Kerala’s village life. Don’t miss the famous Nehru Trophy Boat Race if you’re visiting during the Onam season. Alleppey is ideal for a romantic retreat or a peaceful weekend with family.",
    image: '/assets/alleppey.webp',
    alt: "Alleppey"
  },
  {
    title: "Kovalam",
    description: "Kovalam is a stunning beach town just 16 km from Trivandrum, known for its crescent-shaped shoreline, golden sand, and iconic lighthouse. With calm waters ideal for swimming and water sports like surfing and parasailing, it’s a favorite among beach lovers. The Ayurvedic massage centers and seafood shacks lining the coast make Kovalam the perfect blend of relaxation and recreation.",
    image: '/assets/kovalam.webp',
    alt: "Kovalam"
  },
  {
    title: "Wayanad",
    description: "Located in the northeastern part of Kerala, Wayanad is a lush green district filled with dense forests, waterfalls, caves, and wildlife. It is home to attractions like Edakkal Caves, Banasura Sagar Dam, and Soochipara Waterfalls. Wayanad is a haven for trekkers and adventure lovers, offering activities such as hiking, camping, and wildlife safaris in the Wayanad Wildlife Sanctuary.",
    image: '/assets/wayanad.webp',
    alt: "Wayanad"
  },
  {
    title: "Guruvayur",
    description: "Guruvayur is one of Kerala’s most sacred pilgrimage sites, home to the ancient Guruvayur Sri Krishna Temple. Every day, thousands of devotees visit to offer prayers and witness rituals steeped in centuries of tradition. The town also features the Guruvayur Elephant Camp, where temple elephants are cared for and displayed during special processions. It’s a deeply spiritual destination for those looking to connect with Kerala’s religious roots.",
    image: '/assets/guruvayur.webp',
    alt: "Guruvayur"
  },
  {
    title: "Varkala",
    description: "Varkala is a unique coastal destination known for its red laterite cliffs overlooking the Arabian Sea. The Papanasam Beach, believed to have holy waters, attracts both pilgrims and tourists. You can enjoy paragliding, yoga retreats, Ayurvedic treatments, and spiritual experiences at the cliffside Janardanaswamy Temple. Varkala is perfect for those seeking peace, wellness, and natural beauty.",
    image: '/assets/varkala.webp',
    alt: "Varkala"
  },
  {
    title: "Thekkady",
    description: "Thekkady, located in the Idukki district, is famous for the Periyar Wildlife Sanctuary, one of India’s most renowned nature reserves. Visitors can enjoy boat safaris on Periyar Lake, spot wild elephants, and explore spice plantations. Thekkady offers a mix of adventure and nature, making it ideal for eco-tourists and families who want to get closer to wildlife in a safe, guided environment.",
    image: '/assets/thekkady.webp',
    alt: "Thekkady"
  },
  {
    title: "Kanyakumari",
    description: "Kanyakumari, the southernmost tip of India, is where the Arabian Sea, Bay of Bengal, and Indian Ocean meet. Famous for its breathtaking sunrise and sunset views, the Vivekananda Rock Memorial, and its vibrant cultural heritage, Kanyakumari is perfect for a day trip or a weekend escape. Enjoy the unique experience of standing at the confluence of three seas and exploring local temples and beaches.",
    image: '/assets/kanyakumari.webp',
    alt: "Kanyakumari"
  },
  {
    title: "Rameswaram",
    description: "Rameswaram, located in Tamil Nadu, is a sacred island renowned for the ancient Ramanathaswamy Temple and its iconic Pamban sea bridge. The town is steeped in mythology and spiritual significance, attracting pilgrims from all over India. Visitors can explore pristine beaches, historic temples, and enjoy the tranquil atmosphere. Rameswaram is an ideal destination for spiritual travelers and those interested in South India’s rich cultural heritage.",
    image: '/assets/Rameswaram.webp',
    alt: "Rameswaram"
  }
];

export default function Packages() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    if (sectionRefs.current) {
      sectionRefs.current.forEach((ref) => {
        if (ref) {
          gsap.fromTo(
            ref,
            { y: 80, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ref,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });
    }
  }, []);

  return (
    <div className="container-padding py-12 bg-gradient-to-br from-[#232526] to-[#414345] rounded-2xl shadow-xl">
      <h2 className="heading-h2 text-center text-[#CAE942] mb-6">Popular Kerala & South India Tour Packages</h2>
      <p className="paragraph-p text-center text-gray-300 max-w-3xl mx-auto mb-12">
        Discover the best destinations with Carbon Cabs. From misty hills to sacred temples and golden beaches, our curated packages offer something for every traveler.
      </p>
      <div className="flex flex-col gap-16">
        {packages.map((pkg, idx) => (
          <div
            key={pkg.title}
            ref={el => (sectionRefs.current[idx] = el)}
            className={`package-section grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${
              idx % 2 === 1 ? "md:[direction:rtl]" : ""
            }`}
          >
            <div className="relative w-full h-80 md:h-96 rounded-xl shadow-lg overflow-hidden border-2 border-[#CAE942]/20">
              <Image
                src={pkg.image}
                alt={pkg.alt}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col gap-5 md:gap-8 md:[direction:ltr]">
              <h3 className="text-2xl md:text-3xl font-bold text-[#CAE942]">{pkg.title}</h3>
              <p className="paragraph-p text-gray-200">{pkg.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
