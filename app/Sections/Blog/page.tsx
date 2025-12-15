"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/autoplay"
import Image from "next/image"
import Blog1 from "@/public/Blog-1.jpg"
import Blog2 from "@/public/Blog-2.jpg"
import Blog3 from "@/public/Blog-3.jpg"


const blogData = [
  {
    image: Blog1,
    title: "Designing for 3D Printing: Best Practices and Tips",
    date: "September 15, 2024",
    comments: "0",
    desc: "Discover the best practices and tips for designing for 3D printing. Learn how to create designs that are optimized for 3D printing and how to use 3D printing to create physical models of your designs.",
    tag: "Read more"
  },
  {
    image: Blog2,
    title: "The evolution of 3D printing technology: From Concept to Reality",
    date: "October 20, 2024",
    comments: "0",
    desc: "Discover the evolution of 3D printing technology from concept to reality. Learn how 3D printing has evolved over the years and how it is now used in a variety of industries.",
    tag: "Read more"
  },
  {
    image: Blog3,
    title: "3D printing: The future of manufacturing",
    date: "November 10, 2024",
    comments: "0",
    desc: "Discover the future of manufacturing with 3D printing. Learn how 3D printing is changing the way we manufacture products and how it is now used in a variety of industries.",
    tag: "Read more"
  },
  {
    image: Blog1,
    title: "Designing for 3D Printing: Best Practices and Tips",
    date: "September 15, 2024",
    comments: "0",
    desc: "Discover the best practices and tips for designing for 3D printing. Learn how to create designs that are optimized for 3D printing and how to use 3D printing to create physical models of your designs.",
    tag: "Read more"
  },
  {
    image: Blog2,
    title: "The evolution of 3D printing technology: From Concept to Reality",
    date: "October 20, 2024",
    comments: "0",
    desc: "Discover the evolution of 3D printing technology from concept to reality. Learn how 3D printing has evolved over the years and how it is now used in a variety of industries.",
    tag: "Read more"
  },
  {
    image: Blog3,
    title: "3D printing: The future of manufacturing",
    date: "November 10, 2024",
    comments: "0",
    desc: "Discover the future of manufacturing with 3D printing. Learn how 3D printing is changing the way we manufacture products and how it is now used in a variety of industries.",
    tag: "Read more"
  },
]

const Blog = () => {
  return (
    <>
      <div className="px-[8%] lg:px-[12%] py-20" id="blog">
        <div className="title flex flex-col items-center justify-center text-center">
          <h3 className="Inter font-semibold uppercase tracking-wide text-secondary">
            Blog & News
          </h3>

          <h1 className="Syne font-bold my-4 text-4xl md:text-5xl text-white">
            3D Printing in the News
          </h1>

          <p className="text-gray-400 Inter lg:w-[75%]">
            The latest news and updates from the world of 3D printing. Stay up to date with the latest trends and developments in the industry.
          </p>
        </div>

        <div className="mt-10">
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
              blogData.map((blog, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="blog-card border border-gray-400/40 cursor-pointer rounded-2xl p-5 transition-all durartion-300 hover:border-primary card-brutalist flex flex-col"
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

                    <button className="text-primary flex items-center cursor-pointer gap-2 text-lg font-bold Syne hover:text-white transition-all duration-300">
                      {blog.tag} <i className="bi bi-chevron-double-right pt-1"></i>
                    </button>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Blog