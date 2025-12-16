"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import Image from "next/image";
import Testimonial1 from "@/public/Testimonial-1.jpg";
import Testimonial2 from "@/public/Testimonial-2.jpg";
import Testimonial3 from "@/public/Testimonial-3.jpg";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/app/lib/variants";

const testimonialData = [
  {
    image: Testimonial1,
    name: "Mike Power",
    role: "Lead Designer, Innovatec",
    review: "La precisión y calidad de las impresiones 3D es excepcional. Nuestro proceso de prototipado nunca ha sido tan rápido y preciso. ¡Altamente recomendados!. Repetiremos"
  },
  {
    image: Testimonial2,
    name: "Sarah Johnson",
    role: "Ingeniera Mecánica, BuildRight",
    review: "Trabajar con este equipo cambió las reglas del juego. Manejaron nuestros complejos diseños geométricos con facilidad y entregaron resultados excepcionales a tiempo."
  },
  {
    image: Testimonial3,
    name: "Robert Rodriguez",
    role: "CEO, Future Creations",
    review: "De principio a fin, el servicio fue impecable. Los productos finales superaron nuestras expectativas en todos los sentidos. Definitivamente volveremos para más proyectos."
  },
  {
    image: Testimonial1,
    name: "Mike Power",
    role: "Lead Designer, Innovatec",
    review: "La precisión y calidad de las impresiones 3D es excepcional. Nuestro proceso de prototipado nunca ha sido tan rápido y preciso. ¡Altamente recomendados! 100%!. Repetiremos"
  },
  {
    image: Testimonial2,
    name: "Sarah Johnson",
    role: "Ingeniera Mecánica, BuildRight",
    review: "Trabajar con este equipo cambió las reglas del juego. Manejaron nuestros complejos diseños geométricos con facilidad y entregaron resultados excepcionales a tiempo."
  },
  {
    image: Testimonial3,
    name: "Robert Rodriguez",
    role: "CEO, Future Creations",
    review: "De principio a fin, el servicio fue impecable. Los productos finales superaron nuestras expectativas en todos los sentidos. Definitivamente volveremos para más proyectos."
  },
]

const Testimonial = () => {
  return (
    <motion.div
      variants={staggerContainer(0.3, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="px-[8%] lg:px-[12%] py-20" id="testimonial">
      <motion.div
        variants={staggerContainer(0.3, 0.5)}
        className="title flex flex-col items-center justify-center text-center mb-10">
        <motion.h3 variants={fadeIn('up', 0.2)} className="Inter font-semibold uppercase tracking-wide text-secondary">
          What Our clients Say
        </motion.h3>

        <motion.h1 variants={fadeIn('up', 0.4)} className="Syne font-bold my-4 text-4xl md:text-5xl text-white">
          Trusted by Innovators & Creators
        </motion.h1>

        <motion.p variants={fadeIn('up', 0.6)} className="text-gray-400 Inter lg:w-[75%]">
          Hear from our satisfied clients who have experienced excellenced excellence through our 3D printing services and custom design
        </motion.p>
      </motion.div>

      <motion.div
        variants={fadeIn('up', 0.8)}
      >
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          breakpoints={{
            1200: { slidesPerView: 3 },
            991: { slidesPerView: 2 },
            575: { slidesPerView: 1 },
            0: { slidesPerView: 1 },
          }}
          className="testimonial-swiper"
          style={{ height: "400px" }}
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index} className="p-4">
              <div className="testi-card border border-gray-400 cursor-pointer rounded-2xl p-5 transition-all durartion-300 hover:border-primary card-brutalist mt-2">
                <div className="testi-star text-[#ffcb00] flex gap-2 text-lg mb-5">
                  {
                    Array.from({ length: 4 }).map((_, i) => (
                      <i key={i} className="bi bi-star-fill"></i>
                    ))
                  }
                  <i className="bi bi-star"></i>
                </div>

                <p className="text-gray-400 Inter text-lg italic  mb-5">"{testimonial.review}"</p>

                <div className="testi-section flex items-center justify-between">
                  <div className="testi-details flex gap-3 items-center">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-15 h-15 rounded-full object-cover"
                    />

                    <div className="texti-text">
                      <h2 className="text-white lg:text-xl font-bold Syne">{testimonial.name}</h2>

                      <p className="text-gray-400 Inter -mt-1">{testimonial.role}</p>
                    </div>
                  </div>

                  <i className="bi bi-quote text-6xl text-secondary rotate-180"></i>

                </div>
              </div>

            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.div>
  )
}

export default Testimonial