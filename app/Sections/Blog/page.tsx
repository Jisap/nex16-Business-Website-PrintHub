"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/autoplay"
import Image from "next/image"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "@/app/lib/variants"
import { blogSliderData } from "@/app/lib/blogData"
import Link from "next/link"


const Blog = () => {
  return (
    <>
      <motion.div
        variants={staggerContainer(0.3, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="px-[8%] lg:px-[12%] py-20" id="blog">
        <motion.div
          variants={staggerContainer(0.3, 0.5)}
          className="title flex flex-col items-center justify-center text-center">
          <motion.h3 variants={fadeIn('up', 0.2)} className="Inter font-semibold uppercase tracking-wide text-secondary">
            Blog & News
          </motion.h3>

          <motion.h1 variants={fadeIn('up', 0.4)} className="Syne font-bold my-4 text-4xl md:text-5xl text-white">
            3D Printing in the News
          </motion.h1>

          <motion.p variants={fadeIn('up', 0.6)} className="text-gray-400 Inter lg:w-[75%]">
            The latest news and updates from the world of 3D printing. Stay up to date with the latest trends and developments in the industry.
          </motion.p>
        </motion.div>

        <motion.div variants={fadeIn('up', 0.8)} className="mt-10">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              1200: { slidesPerView: 3 },
              991: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
            className="blog-swiper"
          >
            {
              blogSliderData.map((blog, index) => (
                <SwiperSlide key={index} className="p-1">
                  <div
                    className="blog-card border border-gray-400/40 cursor-pointer rounded-2xl p-5 transition-all durartion-300 hover:border-primary card-brutalist flex flex-col h-full"
                  >
                    <div className="blog-image">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        height={250}
                        width={400}
                        className="object-cover transition-all duration-300 w-full h-auto rounded-lg"
                      />
                    </div>

                    <h2 className="text-white Syne text-[20px] my-4 font-bold mb-3 hover:text-primary transition-all duration-300">
                      {blog.title}
                    </h2>

                    <div className="blog-content flex gap-4 mb-3">
                      <div className="blog-section flex items-center gap-2">
                        <i className="bi bi-calendar-event text-xl text-secondary"></i>
                        <span className="text-gray-400 Inter">{blog.date}</span>
                      </div>

                      <div className="blog-section flex items-center gap-2">
                        <i className="bi bi-patch-question text-xl text-secondary"></i>
                        <span className="text-gray-400 Inter">{blog.comments}</span>
                      </div>
                    </div>

                    <p className="text-gray-400 Inter mb-3">
                      {blog.desc}
                    </p>

                    <Link href={`/Sections/Blog/${blog.slug}`} className="text-primary flex items-center cursor-pointer gap-2 text-lg font-bold Syne hover:text-white transition-all duration-300">
                      {blog.tag} <i className="bi bi-chevron-double-right pt-1"></i>
                    </Link>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </motion.div>
      </motion.div>
    </>
  )
}

export default Blog