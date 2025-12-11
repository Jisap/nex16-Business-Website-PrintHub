"use client"

import Link from "next/link"
import { useState } from "react"


const Footer = () => {

  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleLogoClick = () => {
    setActiveItem(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="px-[8%] lg:px-[12%] pt-15">
        <div className="p-5 rounded-2xl section-bg footer-bg border border-gray-400 overflow-hidden mb-4">
          <div className="p-0 md:p-8 flex flex-col lg:flex-row gap-5">
            <div className="w-full lg:w-1/2">
              <button onClick={handleLogoClick} className=" text-5xl StoryScript text-white drop-shadow-md cursor-pointer">
                <span className="text-cyan-400">Print</span>Hub
                <span className="text-cyan-400">3D</span>
              </button>
            </div>

            <p className="text-gray-400 mt-2">
              © {new Date().getFullYear()} PrintHub. All rights reserved.
            </p>

            <div className="flex items-center gap-3 ">
              <a href="#" className="border border-primary hover:bg-primary w-10 h-10 flex items-center justify-center text-white p-2 rounded-full transition-all duration-300 hover:translate-y-1">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="border border-primary hover:bg-primary w-10 h-10 flex items-center justify-center text-white p-2 rounded-full transition-all duration-300 hover:translate-y-1">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="border border-primary hover:bg-primary w-10 h-10 flex items-center justify-center text-white p-2 rounded-full transition-all duration-300 hover:translate-y-1">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="border border-primary hover:bg-primary w-10 h-10 flex items-center justify-center text-white p-2 rounded-full transition-all duration-300 hover:translate-y-1">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div>
                <h2 className="Syne text-2xl font-bold mb-5 text-white">
                  Quick Links
                </h2>

                <div className="flex flex-col items-start gap-2">
                  <button
                    onClick={() => scrollToSection("About")}
                    className="footer-link text-lg text-gray-400 cursor-pointer hover:text-white transition-all hover:translate-x-1 duration-300"
                  >
                    <i className="ri-arrow-right-double-line text-secondary"></i>
                    About Us
                  </button>
                  <button
                    onClick={() => scrollToSection("About")}
                    className="footer-link text-lg text-gray-400 cursor-pointer hover:text-white transition-all hover:translate-x-1 duration-300"
                  >
                    <i className="ri-arrow-right-double-line text-secondary"></i>
                    About Us
                  </button>
                  <button
                    onClick={() => scrollToSection("Feature")}
                    className="footer-link text-lg text-gray-400 cursor-pointer hover:text-white transition-all hover:translate-x-1 duration-300"
                  >
                    <i className="ri-arrow-right-double-line text-secondary"></i>
                    Feature
                  </button>
                  <button
                    onClick={() => scrollToSection("Services")}
                    className="footer-link text-lg text-gray-400 cursor-pointer hover:text-white transition-all hover:translate-x-1 duration-300"
                  >
                    <i className="ri-arrow-right-double-line text-secondary"></i>
                    Services
                  </button>
                  <button
                    onClick={() => scrollToSection("Testimonial")}
                    className="footer-link text-lg text-gray-400 cursor-pointer hover:text-white transition-all hover:translate-x-1 duration-300"
                  >
                    <i className="ri-arrow-right-double-line text-secondary"></i>
                    Testimonial
                  </button>
                  <button
                    onClick={() => scrollToSection("WhyChooseUs")}
                    className="footer-link text-lg text-gray-400 cursor-pointer hover:text-white transition-all hover:translate-x-1 duration-300"
                  >
                    <i className="ri-arrow-right-double-line text-secondary"></i>
                    Why Choose Us
                  </button>
                </div>


              </div>

              <div>
                <h2 className="Syne text-2xl font-bold mb-5 text-white">
                  Others
                </h2>

                <div className="flex flex-col gap-2">
                  <Link
                    href="#"
                    className="footer-link text-lg text-gray-400 hover:text-white transition-all hover:translate-x-1 duration-300 cursor-pointer"
                  >
                    <i className="ri-arrow-right-double-line text-secondary"></i>
                    Rapid & Precising Prototype
                  </Link>
                  <Link
                    href="#"
                    className="footer-link text-lg text-gray-400 hover:text-white transition-all hover:translate-x-1 duration-300 cursor-pointer"
                  >
                    <i className="ri-arrow-right-double-line text-secondary"></i>
                    Additive Manufacturing
                  </Link>
                  <Link
                    href="#"
                    className="footer-link text-lg text-gray-400 hover:text-white transition-all hover:translate-x-1 duration-300 cursor-pointer"
                  >
                    <i className="ri-arrow-right-double-line text-secondary"></i>
                    Custom Product Design
                  </Link>
                  <Link
                    href="#"
                    className="footer-link text-lg text-gray-400 hover:text-white transition-all hover:translate-x-1 duration-300 cursor-pointer"
                  >
                    <i className="ri-arrow-right-double-line text-secondary"></i>
                    Tooling & Equipment
                  </Link>
                  <Link
                    href="#"
                    className="footer-link text-lg text-gray-400 hover:text-white transition-all hover:translate-x-1 duration-300 cursor-pointer"
                  >
                    <i className="ri-arrow-right-double-line text-secondary"></i>
                    Quality Control
                  </Link>
                </div>
              </div>

              <div>
                <h2 className="Syne text-2xl font-bold mb-5 text-white">
                  Information
                </h2>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-gray-400">
                    <i className="bi bi-phone-vibrate text-secondary text-2xl"></i> +1 (555) 123-4567
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <i className="bi bi-envelope-paper text-secondary text-xl"></i> info@printhub.com
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <i className="bi bi-globe text-secondary text-xl"></i> www.printhub.com
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <i className="bi bi-geo-alt text-secondary text-xl"></i> 123 Main St, Anytown, USA
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer