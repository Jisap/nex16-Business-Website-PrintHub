"use client"

import { useEffect, useState } from "react"


const menuItems = [
  "Features",
  "About",
  "Services",
  "Banner",
  "Projects",
  "Testimonials",
  "WhyChooseUs",
  "Blog"
]

const Navbar = () => {

  const [ActiveMenuItem, setActiveMenuItem] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogoClick = () => {
    setActiveMenuItem(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-body transition-all duration-500">
      <div className="flex justify-between items-center px-[8%] lg:px-[12%] py-4">
        <div className="flex flex-col leading-tight font-sans text-2xl text-gray-300">
          <button
            onClick={handleLogoClick}
            className="text-5xl StoryScript text-white drop-shadow-md cursor-pointer"
          >
            <span className="text-cyan-400">Print</span>Hub
            <span className="text-cyan-400">3D</span>
          </button>
        </div>

        {/* desktop menu */}
        <ul className="hidden lg:flex text-lg items-center gap-5 cursor-pointer text-white font-medium">
          {
            menuItems.map((item, index) => (
              <li
                key={index}
              >
                <button
                  className={`
                    relative p-[5px] nav-menu transition-all duration-[--transition-regular] cursor-pointer
                    ${ActiveMenuItem === item ? "active-nav text-cyan-400" : "text-white"}  
                  `}
                  onClick={() => setActiveMenuItem(item)}
                >
                  {item}
                </button>
              </li>
            ))
          }
        </ul>

        {/* Social media icons */}
        <div className="flex items-center gap-3">
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

        <button className="text-white text-3xl lg:hidden focus:outline-none transition-transform duration-300 hover:scale-110">
          <i className={`bi ${menuOpen ? "bi-x" : "bi-list"}`}></i>
        </button>
      </div>
    </nav>
  )
}

export default Navbar