"use client"

import HeroImg from "@/public/Hero-Image.png"
import Image from "next/image"


const Hero = () => {
  return (
    <div className="Hero section-bg px-[8%] lg:px-[12%]">
      <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-5">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h4 className="text-secondary Inter uppercase text-xl mb-10">
            From Concept to Creation
          </h4>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold Syne my-4 text-gray-300 mb-10">
            Precision 3D Printing Solutions
          </h1>

          <div className="flex items-center justify-center lg:justify-start gap-5 mt-5">
            <button className="btn px-4 sm:px-6 md:px-8 py-2 border border-primary bg-primary rounded-full text-base sm:text-lg md:text-xl hover:bg-transparent cursor-pointer transition-all duration-300 hover:text-primary">
              Explore More
            </button>

            <button className="btn px-4 sm:px-6 md:px-8 py-2 text-white border border-primary bg-transparent rounded-full text-base sm:text-lg md:text-xl hover:bg-primary cursor-pointer transition-all duration-300 hover:text-body">
              <i className="bi bi-play-fill"></i>Video Production
            </button>
          </div>

        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <div className="hero-image">
            <Image
              src={HeroImg}
              alt="Hero Image"
              height={700}
              width={700}
            />
          </div>

          <p className="text-gray-300 Inter text-base md:text-lg text-center mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium accusamus
            voluptates odit laborum quibusdam mollitia dignissimos est nostrum minima.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero