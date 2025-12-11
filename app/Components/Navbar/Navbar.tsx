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

  const [ActiveMenuItem, setActiveMenuItem] = useState<string | null>(null)

  const handleLogoClick = () => {
    setActiveMenuItem(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-body transition-all duration-500">
      <div className="flex justify-between items-center px-[8%] lg:px-[12%] py-4">
        <div className="flex flex-col leading-tight">
          <button
            onClick={handleLogoClick}
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
                    relative nav-menu transition-all duration-300 cursor-pointer
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
      </div>
    </nav>
  )
}

export default Navbar