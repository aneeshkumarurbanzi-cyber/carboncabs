import Hero from "@/assets/contact_hero.webp";

export default function Contact_hero() {
  return (
    <div
      className="h-[50vh] md:h-[60vh] lg:h-[70vh] pt-20 lg:pt-30 px-5 py-5 md:px-10 md:py-10 flex justify-center items-center"
      style={{
        backgroundImage: `url(${Hero.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        filter: "brightness(0.8)",
      }}
    >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white">Contact us</h1>
    </div>
  );
}
