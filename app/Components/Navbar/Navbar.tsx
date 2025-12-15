"use client"

import { useEffect, useState } from "react"


const menuItems = [
  { id: "features", label: "Features" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "banner", label: "Banner" },
  { id: "projects", label: "Projects" },
  { id: "testimonial", label: "Testimonials" },
  { id: "whychooseus", label: "WhyUs" },
  { id: "blog", label: "Blog" }
];

const Navbar = () => {

  const [ActiveMenuItem, setActiveMenuItem] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogoClick = () => {
    setActiveMenuItem(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMenuItemClick = (id: string) => {
    setActiveMenuItem(id);
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -100; // Ajuste para compensar la altura del navbar
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Se encarga de determinar que sección esta actualmente en la vista del usuario
  useEffect(() => {
    const handleScrollSpy = () => {
      let current: string | null = null;
      menuItems.forEach((item) => {                                // Se recorre cada sección 
        const section = document.getElementById(item.id);             // y se obtiene su id
        if (section) {                                           // En cada sección obtenemos, 
          const sectionTop = section.offsetTop - 150;            // su posición
          const sectionHeight = section.offsetHeight;            // y su altura
          if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) { // Comprueba si la sección actual está en el viewport
            current = item.id;                                                                   // Si la sección actual es la que se está viendo, se actualiza current
          }
        }

      });
      setActiveMenuItem(current);  // Si la sección actual es la que se está viendo, se activa con current
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-body transition-all duration-500">
      <div className="flex justify-between items-center px-[6%] lg:px-[4%] py-4">
        <div className="flex flex-col leading-tight font-sans text-2xl text-gray-300">
          <button
            onClick={handleLogoClick}
            className="text-5xl StoryScript text-white drop-shadow-md cursor-pointer"
          >
            <span className="text-cyan-400">Print</span>Hub
            <span className="text-cyan-400">3D</span>
          </button>
        </div>

        {/* Contenedor para el menú y los iconos sociales en escritorio */}
        <div className="hidden lg:flex items-center gap-8">
          {/* menu de escritorio */}
          <ul className="flex items-center lg:gap-3 xl:gap-5 cursor-pointer text-white font-medium lg:text-base xl:text-lg">
            {
              menuItems.map((item, index) => (
                <li
                  key={index}
                >
                  <button
                    className={`
                      relative p-[5px] nav-menu transition-all duration-[--transition-regular] cursor-pointer capitalize
                      ${ActiveMenuItem === item.id ? "active-nav text-cyan-400" : "text-white"}  
                    `}
                    onClick={() => handleMenuItemClick(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))
            }
          </ul>

          {/* Espaciador que empuja los iconos a la derecha */}
          <div className="flex-grow"></div>

          {/* Iconos de redes sociales */}
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
        </div>

        <button className="text-white text-3xl lg:hidden focus:outline-none transition-transform duration-300 hover:scale-110">
          <i className={`bi ${menuOpen ? "bi-x" : "bi-list"}`}></i>
        </button>
      </div>
    </nav>
  )
}

export default Navbar