"use client"

import Image from "next/image"
import WhyChoose from "@/public/Why-Choose-Us-Image.jpg"


const WhyChoseUs = () => {
  return (
    <>
      <div className="px-[8%] lg:px-[12%] py-20 section-bg" id="whychooseus">
        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-10">
          {/* Left Side */}
          <div className="w-full lg:w-1/2">
            <div className="title">
              <h3 className="Inter font-semibold uppercase tracking-wide text-secondary">
                Why Choose Us
              </h3>

              <h1 className="Syne font-bold my-4 text-4xl md:text-5xl text-white">
                Leading the Way in 3D Printing
              </h1>

              <p className="text-gray-400 Inter lg:w-[75%]">
                We are a leading 3D printing company that offers a wide range of services to our clients. Our team of experts is dedicated to providing the highest quality of service to our clients.
              </p>

              <p className="text-gray-400 Inter mt-5">
                The best 3D printing company in the industry
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-5 mt-8">
              <div className="text-white">
                <h2 className="flex gap-2 mb-1 text-lg hover:translate-x-[5px] transition-all duration-300">
                  <i className="bi bi-check-square text-secondary"></i> Expertise and Experience
                </h2>
                <h2 className="flex gap-2 mb-1 text-lg hover:translate-x-[5px] transition-all duration-300">
                  <i className="bi bi-check-square text-secondary"></i> State-of-the-art Technology
                </h2>
                <h2 className="flex gap-2 mb-1 text-lg hover:translate-x-[5px] transition-all duration-300">
                  <i className="bi bi-check-square text-secondary"></i> Custom Solutions
                </h2>
                <h2 className="flex gap-2 mb-1 text-lg hover:translate-x-[5px] transition-all duration-300">
                  <i className="bi bi-check-square text-secondary"></i> Fast Turnaround Times
                </h2>
              </div>

              <div className="text-white">
                <h2 className="flex gap-2 mb-1 text-lg hover:translate-x-[5px] transition-all duration-300">
                  <i className="bi bi-check-square text-secondary"></i> High-Quality Standards
                </h2>
                <h2 className="flex gap-2 mb-1 text-lg hover:translate-x-[5px] transition-all duration-300">
                  <i className="bi bi-check-square text-secondary"></i> Affordable Pricing
                </h2>
                <h2 className="flex gap-2 mb-1 text-lg hover:translate-x-[5px] transition-all duration-300">
                  <i className="bi bi-check-square text-secondary"></i> Sustainable Practices
                </h2>
                <h2 className="flex gap-2 mb-1 text-lg hover:translate-x-[5px] transition-all duration-300">
                  <i className="bi bi-check-square text-secondary"></i> Dedicated Customer Support
                </h2>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-8 text-white">
                <div className="flex flex-col">
                  <h2 className="text-2xl Syne mb-3">
                    Client Satisfaction Rate
                  </h2>
                  <div className="range-bar range-bar-95"></div>
                </div>

                <div className="flex flex-col">
                  <h2 className="text-2xl Syne mb-3">
                    Innovative Technology Adoption
                  </h2>
                  <div className="range-bar range-bar-76"></div>
                </div>
              </div>

              <Image
                src={WhyChoose}
                alt="Why Choose Us"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhyChoseUs