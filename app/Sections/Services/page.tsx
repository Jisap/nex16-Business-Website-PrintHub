"use client"

import Image from "next/image"
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/app/lib/variants";
import service1 from "@/public/Services-1.png"
import service2 from "@/public/Services-2.png"
import service3 from "@/public/Services-3.png"
import service4 from "@/public/Services-4.png"
import service5 from "@/public/Services-5.png"
import service6 from "@/public/Services-6.png"
import Link from "next/link"


const servicesData = [
  {
    id: "1",
    title: "Rapid & Precise Prototyping",
    desc: "Exelecent for quick prototyping and testing. Our 3D printing services enable you to create physical models of your designs, allowing you to test and validate your ideas before moving to production.",
    image: service1
  },
  {
    id: "2",
    title: "Addictive Manufacturing System",
    desc: "Simple and efficient production process. Our 3D printing services enable you to create physical models of your designs, allowing you to test and validate your ideas before moving to production.",
    image: service2
  },
  {
    id: "3",
    title: "Customized Solutions",
    desc: "Tailored to your specific needs. Get the perfect fit for your business with our 3D printing services.",
    image: service3
  },
  {
    id: "4",
    title: "Design & Developmen",
    desc: "Our design and development services enable you to create physical models of your designs.",
    image: service4
  },
  {
    id: "5",
    title: "Quality Assurance",
    desc: "Assurance for your products. Always ensure that your products meet the highest quality standards.",
    image: service5
  },
  {
    id: "6",
    title: "Production & Delivery",
    desc: "We ensure that your products are delivered on time and in perfect condition.",
    image: service6
  }
]

const Services = () => {
  return (
    <>
      <motion.div
        variants={staggerContainer(0.3, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="px-[8%] section-bg service-bg lg:px-[12%] py-20" id="services">
        <motion.div
          variants={staggerContainer(0.3, 0.5)}
          className="w-full flex flex-col-reverse lg:flex-row justify-between items-center gap-5">
          <motion.div variants={staggerContainer(0.3, 0.5)} className="w-full lg:w-1/2 grid grid-cols-1 xl:grid-cols-2 gap-8">
            {
              servicesData.slice(0, 2).map((service, index) => (
                <motion.div variants={fadeIn('up', 0.2 * (index + 1))} key={index} className="card-brutalist flex flex-col gap-5 p-6 cursor-pointer rounded-2xl" >
                  <Image
                    src={service.image}
                    alt={service.title}

                    className="object-cover w-15 h-15"
                  />

                  <div>
                    <h3 className="text-white Syne mb-3 text-xl font-bold">{service.title}</h3>

                    <p className="text-gray-300 Inter">{service.desc}</p>
                  </div>

                  <motion.button variants={fadeIn('up', 0.3 * (index + 1))} className="text-xl mt-4 text-primary hover:text-white transition-all duration-300 cursor-pointer">
                    Read More <i className="ri-arrow-right-double-line"></i>
                  </motion.button>
                </motion.div>
              ))
            }
          </motion.div>

          <motion.div variants={fadeIn('right', 0.2)} className="w-full lg:w-1/2 lg:pl-8">
            <motion.div variants={staggerContainer(0.3, 0.5)} className="title">
              <motion.h3 variants={fadeIn('right', 0.2)} className="Inter font-semibold uppercase tracking-wide text-secondary text-2xl">
                Our Services
              </motion.h3>

              <motion.h1 variants={fadeIn('right', 0.3)} className="Syne font-bold my-4 text-4xl md:text-5xl text-white">
                3D Printing Solutions for Your Business
              </motion.h1>

              <motion.p variants={fadeIn('right', 0.4)} className="text-gray-400 Inter">
                We offer a range of 3D printing services to help you create physical models of your designs, allowing you to test and validate your ideas before moving to production.
                Our services include rapid prototyping, additive manufacturing, customized solutions, design and development, quality assurance, and production and delivery.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.3, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {servicesData.slice(2, servicesData.length).map((item, index) => (
            <motion.div
              variants={fadeIn('up', 0.2 * (index + 1))}
              key={index}
              className="card-brutalist flex flex-col gap-5 p-6 cursor-pointer rounded-2xl"
            >
              <Image
                src={item.image}
                alt={item.title}
                className="object-cover w-15 h-15"
              />

              <div>
                <h3 className="text-white Syne mb-3 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="text-gray-300 Inter">
                  {item.desc}
                </p>

                <motion.button variants={fadeIn('up', 0.3 * (index + 1))} className="text-xl mt-4 text-primary hover:text-white transition-all duration-300 cursor-pointer">
                  Read More <i className="ri-arrow-right-double-line"></i>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  )
}

export default Services