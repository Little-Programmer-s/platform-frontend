
import Hero from '@/components/pages/hero-section';
import Navbar from '@/components/partials/navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className='c-space container mx-auto max-w-7xl grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[14rem] mt-12'>
        <div className='grid-default-color grid-1'></div>
        <div className='grid-default-color grid-2'></div>
        <div className='grid-default-color grid-3'></div>
        <div className='grid-black-color grid-4'></div>
        <div className='grid-special-color grid-6'></div>
        <div className='grid-default-color grid-5'></div>
      </div>
      {/* Project Section */}
      {/* Testimonial Section */}
      {/* Billing Section */}
      {/* Footer */}
    </>
  );
}
