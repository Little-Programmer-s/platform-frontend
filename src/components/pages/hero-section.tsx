import NextImage from 'next/image'
import { FlipWords } from "@/components/ui/flip-words";

const words = ["User Experiences", "Beautiful Interface", "Modern Interface"];

function Hero() {
  return (
    <section className="c-space w-[100vw] !h-[100vh] overflow-hidden grid-pattern relative">
        <div className='absolute bottom-0 bg-gradient-to-t from-primary to-transparent w-full h-64' />
        <NextImage className="absolute left-0 top-0" src="/assets/images/spotlight-left.png" alt="spotlight" width="805" height="608" />
        <NextImage className="absolute right-0 top-0" src="/assets/images/spotlight-right.png" alt="spotlight" width="805" height="608" />
        <div className="container mx-auto max-w-7xl h-[100vh] flex flex-col justify-center items-center">
          <div className='flex flex-col justify-center items-center'>
            <p className='text-slate-300 text-lg mb-8 tracking-widest'>Dynamic Web Magic with Next.js</p>
            <h1 className='text-5xl md:text-7xl text-center font-bold'>
              Transforming Concepts into Seamless <FlipWords className='!text-lavender' words={words} />
            </h1>
            <p className='mt-8 text-md md:text-2xl font-extralight'>Hi! I’m John Doe, a Next.js Developer based in Russia</p>

            <button className='bg-gradient-to-r to-midnight from-slate-900 px-8 py-4 mt-8 border rounded-2xl border-slate-900 cursor-pointer z-10 w-full md:w-fit'>
              See my work
            </button>
          </div>
        </div>
      </section>
  )
}

export default Hero