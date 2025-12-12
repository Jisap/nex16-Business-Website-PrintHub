"use client"

import Link from "next/link"
import { useState } from "react"

const quickLinks = [
  { id: "About", label: "About Us" },
  { id: "Feature", label: "Feature" },
  { id: "Services", label: "Services" },
  { id: "Testimonial", label: "Testimonial" },
  { id: "WhyChooseUs", label: "Why Choose Us" },
];

const otherLinks = [
  { href: "#", label: "Rapid & Precising Prototype" },
  { href: "#", label: "Additive Manufacturing" },
  { href: "#", label: "Custom Product Design" },
  { href: "#", label: "Tooling & Equipment" },
  { href: "#", label: "Quality Control" },
];

const socialLinks = [
  { href: "#", icon: "bi-facebook", label: "Facebook" },
  { href: "#", icon: "bi-twitter", label: "Twitter" },
  { href: "#", icon: "bi-instagram", label: "Instagram" },
  { href: "#", icon: "bi-youtube", label: "YouTube" },
];

const informationItems = [
  { icon: "bi-phone-vibrate text-2xl", text: "+1 (555) 123-4567" },
  { icon: "bi-envelope-paper text-xl", text: "info@printhub.com" },
  { icon: "bi-globe text-xl", text: "www.printhub.com" },
  { icon: "bi-geo-alt text-xl", text: "123 Main St, Anytown, USA" },
];

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
        <div className="p-8 rounded-2xl section-bg footer-bg border border-gray-400 overflow-hidden mb-4">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Columna Izquierda: Logo y Redes Sociales */}
            <div className="lg:w-1/3 flex flex-col">
              <div>
                <button onClick={handleLogoClick} className=" text-5xl StoryScript text-white drop-shadow-md cursor-pointer">
                  <span className="text-cyan-400">Print</span>Hub
                  <span className="text-cyan-400">3D</span>
                </button>
                <p className="text-gray-400 mt-2">
                  Creating the future of 3D printing
                </p>
              </div>
              <div className="flex items-center gap-3 mt-5">
                {socialLinks.map((link) => (
                  <a
                    key={link.icon}
                    href={link.href}
                    aria-label={link.label}
                    className="border border-primary hover:bg-primary w-10 h-10 flex items-center justify-center text-white p-2 rounded-full transition-all duration-300 hover:translate-y-1"
                  >
                    <i className={`bi ${link.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Columna Derecha: Grid de Links */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Quick Links */}
                <div>
                  <h2 className="Syne text-2xl font-bold mb-5 text-white">
                    Quick Links
                  </h2>
                  <div className="flex flex-col items-start gap-2">
                    {quickLinks.map((link) => (
                      <button
                        key={link.id}
                        onClick={() => scrollToSection(link.id)}
                        className="footer-link text-lg text-gray-400 cursor-pointer hover:text-white transition-all hover:translate-x-1 duration-300"
                      >
                        <i className="ri-arrow-right-double-line text-secondary"></i>
                        {link.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Others */}
                <div>
                  <h2 className="Syne text-2xl font-bold mb-5 text-white">
                    Others
                  </h2>
                  <div className="flex flex-col gap-2">
                    {otherLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="footer-link text-lg text-gray-400 hover:text-white transition-all hover:translate-x-1 duration-300 cursor-pointer"
                      >
                        <i className="ri-arrow-right-double-line text-secondary"></i>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Information */}
                <div>
                  <h2 className="Syne text-2xl font-bold mb-5 text-white">
                    Information
                  </h2>
                  <div className="flex flex-col gap-2">
                    {informationItems.map((item) => (
                      <div key={item.text} className="flex items-center gap-2 text-gray-400">
                        <i className={`bi ${item.icon} text-secondary`}></i> {item.text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-20 p-5 border-t border-gray-500">
          <div className="flex justify-center items-center gap-5">
            <p className="text-xl text-gray-400">
              © {new Date().getFullYear()} PrintHub. All rights reserved.
              <Link href="https://www.facebook.com/" className="text-primary Syne font-bold hover:underline">
                {" "}PrintHub
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
