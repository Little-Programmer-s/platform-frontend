import Hero from "@/components/pages/hero-section";
import Tech from "@/components/pages/tech-section";
import Testimonial from "@/components/pages/testimonial-section";
import Navbar from "@/components/partials/navbar";

import { Carousel, Card } from "@/components/ui/apple-cards-carousel";



const data = [
  {
    category: "Unknown",
    title: "Habibetoon",
    src: "/assets/images/Habibetoon.jpg",
    content: "",
  },
  {
    category: "Frontend Developer",
    title: "Amirhossein Amiri",
    src: "/assets/images/Amiri.jpg",
    content: "",
  },
  {
    category: "Backend Developer",
    title: "Mohammad Hossein Alidadi Talkhestani",
    src: "/assets/images/talkhestani.jpg",
    content: "",
  },
];

export default function Home() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));


  return (
    <>
      <Navbar />
      <Hero />
      <Tech />
      <Testimonial />
      <div className="container max-w-7xl mx-auto c-space mt-32">
          <h1 className="text-center text-5xl font-bold mb-4">Team  <span className="text-lavender">members</span></h1>
          <Carousel items={cards} />
      </div>
      {/* Footer */}
    </>
  );
}
