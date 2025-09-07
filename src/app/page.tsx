import Hero from "@/components/pages/hero-section";
import Team from "@/components/pages/team-section";
import Tech from "@/components/pages/tech-section";
import Testimonial from "@/components/pages/testimonial-section";
import Footer from "@/components/partials/footer";
import Navbar from "@/components/partials/navbar";






export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Tech />
      <Testimonial />
      <Team />
      <Footer />
    </>
  );
}
