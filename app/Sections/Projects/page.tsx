"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/app/lib/variants";
import Project1 from "@/public/Project-1.jpg";
import Project2 from "@/public/Project-2.jpg";
import Project3 from "@/public/Project-3.jpg";
import Project4 from "@/public/Project-4.jpg";
import Project5 from "@/public/Project-5.jpg";

const ProjectData = [
  {
    id: "1",
    title: "Architectural Model",
    desc: "A detailed 3D printed model of a modern residential building, showcasing intricate details and precision.",
    image: Project1
  },
  {
    id: "2",
    title: "Mechanical Gear Set",
    desc: "Functional gear set prototype created to test for fit and mechanical stress before mass production.",
    image: Project2
  },
  {
    id: "3",
    title: "Custom Drone Frame",
    desc: "Lightweight and durable custom drone frame, designed and printed for a high-performance quadcopter.",
    image: Project3
  },
  {
    id: "4",
    title: "Medical Implant Prototype",
    desc: "A patient-specific surgical implant prototype, printed with biocompatible materials for pre-surgical planning.",
    image: Project4
  },
  {
    id: "5",
    title: "Artistic Sculpture",
    desc: "A complex and beautiful sculpture, bringing a digital artist's vision to life with high-resolution 3D printing.",
    image: Project5
  }
]


const Proyects = () => {
  return (
    <>
      <motion.div
        variants={staggerContainer(0.3, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="px-[8%] lg:px-[12%] section-bg project-bg py-20" id="projects">
        <motion.div
          variants={staggerContainer(0.3, 0.5)}
          className="title flex flex-col items-center justify-center text-center mb-10">
          <motion.h3 variants={fadeIn('up', 0.2)} className="Inter font-semibold uppercase tracking-wide text-secondary text-2xl">
            Our Projects
          </motion.h3>

          <motion.h1 variants={fadeIn('up', 0.4)} className="Syne font-bold my-4 text-4xl md:text-5xl text-white">
            Innovations in 3D Design
          </motion.h1>

          <motion.p variants={fadeIn('up', 0.6)} className="text-gray-400 Inter lg:w-[75%]">
            We are proud to showcase our latest 3D printing projects, highlighting our commitment to innovation and precision in our work.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.3, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5 z-10">
          {
            ProjectData.slice(0, 3).map((project) => (
              <motion.div
                variants={fadeIn('up', 0.2)}
                key={project.id}
                className="group rounded-xl overflow-hidden cursor-pointer border border-gray-500/50 hover:border-primary hover:bg-body hover:translate-y-1 transition-all duration-300">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover brightness-50 hover:brightness-75 transition-all duration-300"
                />
                <div className="p-5">
                  <h3 className="text-white Syne mb-2 text-2xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="text-gray-400">
                    {project.desc}
                  </p>

                  <button className="btn text-secondary mt-5 px-8 py-2 border border-primary rounded-xl text-xl hover:bg-primary hover:text-body cursor-pointer transition-all duration-300">
                    Read More <i className="ri-arrow-right-double-line"></i>
                  </button>
                </div>
              </motion.div>
            ))
          }
        </motion.div>

        <motion.div
          variants={staggerContainer(0.3, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {
            ProjectData.slice(3).map((project) => (
              <motion.div
                variants={fadeIn('up', 0.2)}
                key={project.id}
                className="group rounded-xl overflow-hidden cursor-pointer border border-gray-500/50 hover:border-primary hover:bg-body hover:translate-y-1 transition-all duration-300">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover brightness-50 hover:brightness-75 transition-all duration-300"
                />

                <div className="p-5">
                  <h3 className="text-white Syne mb-2 text-2xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="text-gray-400">
                    {project.desc}
                  </p>

                  <button className="btn text-secondary mt-5 px-8 py-2 border border-primary rounded-xl text-xl hover:bg-primary hover:text-body cursor-pointer transition-all duration-300">
                    Read More <i className="ri-arrow-right-double-line"></i>
                  </button>
                </div>
              </motion.div>
            ))
          }
        </motion.div>
      </motion.div>
    </>
  )
}

export default Proyects