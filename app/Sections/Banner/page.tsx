"use client"
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/app/lib/variants";

const Banner = () => {
  return (
    <motion.div
      variants={staggerContainer(0.3, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.6 }}
      className="px-[8%] lg:px-[12%] section-bg py-20" id="banner"
    >
      <div className="w-full flex flex-col justify-center items-center text-center border border-primary rounded-2xl p-10">
        <div className="title">
          <motion.h1
            variants={fadeIn('up', 0.2)}
            className="Syne font-bold my-4 text-4xl md:text-6xl w-full text-white lg:block hidden">
            Bring Your Design to Life with <br /> Expert 3D Printing
          </motion.h1>

          <motion.h1
            variants={fadeIn('up', 0.2)}
            className="syne font-bold my-4 text-3xl md:text-6xl w-full text-white lg:hidden flex items-center justify-center">
            Bring Your Design to Life with Expert 3D Printing
          </motion.h1>

          <motion.p variants={fadeIn('up', 0.4)} className="Inter text-gray-400">
            We offer a range of 3D printing services to help you create physical models of your designs, allowing you to test and validate your ideas before moving to production.
          </motion.p>

          <motion.button variants={fadeIn('up', 0.6)} className="btn mt-7 px-8 py-3 border border-primary bg-primary rounded-xl text-xl hover:bg-secondary hover:border-transparent transition-all duration-300 cursor-pointer">
            Contact Us Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default Banner