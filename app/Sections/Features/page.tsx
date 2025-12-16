"use client"

import Image from "next/image"
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/app/lib/variants";
import Features1 from "@/public/Feature-1.png";
import Features2 from "@/public/Feature-2.png";
import Features3 from "@/public/Feature-3.png";


const Features = () => {

  const features = [
    {
      img: Features1,
      title: "Accurate Prototyping ",
      desc: "Prototyping faster than ever before. We dominate the market with our precision and accuracy."
    },
    {
      img: Features2,
      title: "Custom Manufacturing ",
      desc: "Custom manufacturing solutions for your business. We provide the best quality and the best service."
    },
    {
      img: Features3,
      title: "Complex Geometries ",
      desc: "Complex geometries are no problem for us. We provide the best quality and the best service."
    }
  ]


  return (
    <motion.div
      variants={staggerContainer(0.3, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.4 }}
      className="px-[8%] lg:px-[12%] pb-20" id="features">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          features.map((feature, index) => (
            <motion.div
              variants={fadeIn('up', 0.2 * (index + 1))}
              key={index}
              className="feature-card flex flex-col xl:flex-row items-center xl:items-start gap-5 xl:gap-4 p-6 xl:p-4 cursor-pointer rounded-2xl border border-white hover:border-secondary hover:translate-y-1 transition-all duration-300"
            >
              <Image
                src={feature.img}
                alt={feature.title}
                className="w-20 h-20 object-contain shrink-0"
              />

              <div className="feature-content text-center xl:text-left">
                <h3 className="text-white Syne mb-3 text-2xl font-bold">{feature.title}</h3>
                <p className="text-gray-300 inter">{feature.desc}</p>
              </div>
            </motion.div>
          ))
        }
      </div>
    </motion.div>
  )
}

export default Features